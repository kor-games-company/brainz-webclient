import ContentPanel from '@/app/_ui/layout/ContentPanel';
import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';
import React from 'react';
import PageHeader from '../../_components/PageHeader';
import CreatePackCard from './_components/CreatePackCard';
import Image from 'next/image';
import slotsImage from '@/../public/jeopardy.jpg';
import territoryImage from '@/../public/triviador.jpg';
import quizImage from '@/../public/kahoot.jpg';

export default function WorkshopPage() {
  const workshopDictionary = getCurrentDictionary().pages.workshop;

  return (
    <article className="flex flex-col items-stretch gap-4">
      <PageHeader name={workshopDictionary.name} description={workshopDictionary.description} />
      <ContentPanel className="flex flex-col items-stretch gap-4">
        <div>
          <h1 className="text-xl font-medium">{workshopDictionary.createPackTitle}</h1>
          <p className="font-medium text-opposite-secondary">
            {workshopDictionary.createPackDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 xl:grid-cols-3">
          <CreatePackCard
            title={workshopDictionary.createSlotsPack}
            image={<Image src={slotsImage} alt="Slots game image" />}
          />
          <CreatePackCard
            title={workshopDictionary.createTerritoryPack}
            image={<Image src={territoryImage} alt="Territory game image" />}
          />
          <CreatePackCard
            title={workshopDictionary.createQuizPack}
            image={<Image src={quizImage} alt="Quiz game image" />}
          />
        </div>
      </ContentPanel>
      <ContentPanel>
        <h1 className="text-xl font-medium">Your packs</h1>
      </ContentPanel>
    </article>
  );
}
