import PageHeader from '@/app/(routes)/(platform)/_components/PageHeader';
import ContentPanel from '@/app/_ui/layout/ContentPanel';
import getCurrentDictionary from '@/shared/utils/localization/getCurrentDictionary';
import { redirect } from 'next/navigation';
import React from 'react';
import BackToWorkshopLink from './_components/BackToWorkshopLink';
import { WorkshopDictionary } from '@/shared/localization/dictionaries/pages/WorkshopDictionary';
import CreatePackForm from './_components/CreatePackForm';
import { GameType } from '@/core/domain/games/valueObjects/GameType';

type Props = {
  params: {
    gameType: string;
  };
};

export default function CreateGamePackPage({ params: { gameType: gameTypeStr } }: Props) {
  if (!(gameTypeStr in GameType)) redirect('/workshop');
  const gameType = gameTypeStr as GameType;

  const workshopDictionary = getCurrentDictionary().pages.workshop;
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

function getTranslationsFromGameType(gameType: GameType, dict: WorkshopDictionary) {
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
