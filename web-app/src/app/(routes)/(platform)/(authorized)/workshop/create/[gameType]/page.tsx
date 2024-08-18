import PageHeader from '@/app/(routes)/(platform)/_components/PageHeader';
import ContentPanel from '@/app/_ui/layout/ContentPanel';
import { isGameType } from '@/utils/enums/isInEnum';
import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';
import { GameType } from '@prisma/client';
import { redirect } from 'next/navigation';
import React from 'react';
import BackToWorkshopLink from '../../_components/BackToWorkshopLink';
import { WorkshopDictionary } from '@/localization/dictionaries/pages/WorkshopDictionary';
import CreatePackForm from '../../_components/CreatePackForm';

type Props = {
  params: {
    gameType: string;
  };
};

export default function CreateGamePackPage({ params: { gameType: gameTypeStr } }: Props) {
  const gameType = gameTypeStr.toUpperCase() as GameType;
  if (!isGameType(gameType)) redirect('/workshop');

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
    case 'SLOTS':
      return { title: dict.slots.createTitle, description: dict.slots.createDescription };
    case 'TERRITORY':
      throw new Error('Not implemented');
    case 'QUIZ':
      throw new Error('Not implemented');
  }
}
