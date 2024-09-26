import PageHeader from '@/app/(routes)/(platform)/_components/PageHeader';
import ContentPanel from '@/app/_ui/layout/ContentPanel';
import { redirect } from 'next/navigation';
import React from 'react';
import BackToWorkshopLink from './_components/BackToWorkshopLink';
import { WorkshopDictionary } from '@/shared/localization/dictionaries/pages/WorkshopDictionary';
import CreatePackForm from './_components/CreatePackForm';
import { GameTypeEnum } from '@/core/domain/value-objects/game/GameType';
import { getCurrentUserDictionary } from '@/core/infrastructure/auth/auth.utils';

type Props = {
  params: {
    gameType: string;
  };
};

export default async function CreateGamePackPage({ params: { gameType: gameTypeStr } }: Props) {
  if (!(gameTypeStr in GameTypeEnum)) redirect('/workshop');
  const gameType = gameTypeStr as GameTypeEnum;

  const workshopDictionary = (await getCurrentUserDictionary()).pages.workshop;
  const { title, description } = getTranslationsFromGameType(gameType, workshopDictionary);

  return (
    <article className="flex flex-col items-stretch gap-4">
      <div className="mb-4">
        <BackToWorkshopLink />
      </div>
      <PageHeader name={title} description={description} />
      <ContentPanel>
        <CreatePackForm gameType={gameType} />
      </ContentPanel>
    </article>
  );
}

function getTranslationsFromGameType(gameType: GameTypeEnum, dict: WorkshopDictionary) {
  switch (gameType) {
    case 'slots':
      return { title: dict.slots.createTitle, description: dict.slots.createDescription };
    case 'territory':
      throw new Error('Not implemented');
    case 'quiz':
      throw new Error('Not implemented');
    default:
      throw new Error('Unreachable code');
  }
}
