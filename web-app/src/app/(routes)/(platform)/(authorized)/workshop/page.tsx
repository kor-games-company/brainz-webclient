import ContentPanel from '@/app/_ui/layout/ContentPanel';
import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';
import React from 'react';
import PageHeader from '../../_components/PageHeader';
import CreatePackCard from './_components/CreatePackCard';
import Image from 'next/image';
import slotsImage from '@/../public/jeopardy.jpg';
import territoryImage from '@/../public/triviador.jpg';
import quizImage from '@/../public/kahoot.jpg';
import { prisma } from '@/prisma';
import { auth } from '@/auth/auth';
import UserPackCard from './_components/UserPackCard';
import Link from 'next/link';
import { GameType } from '@prisma/client';

async function getUserPacks(userId: string) {
  return await prisma.gamePack.findMany({
    where: {
      userId,
    },
  });
}

export default async function WorkshopPage() {
  const workshopDictionary = getCurrentDictionary().pages.workshop;

  const session = await auth();

  const packs = await getUserPacks(session!.user!.id!);

  return (
    <article className="flex flex-col items-stretch gap-4">
      <PageHeader name={workshopDictionary.name} description={workshopDictionary.description} />
      {packs.length > 0 && (
        <ContentPanel>
          <h1 className="text-xl font-medium">Your packs</h1>
          <div>
            {packs.map((pack) => (
              <UserPackCard key={pack.id} pack={pack} />
            ))}
          </div>
        </ContentPanel>
      )}
      <ContentPanel className="flex flex-col items-stretch gap-4">
        <div>
          <h1 className="text-xl font-medium">{workshopDictionary.createPackTitle}</h1>
          <p className="font-medium text-opposite-secondary">
            {workshopDictionary.createPackDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 xl:grid-cols-3">
          <Link href={`/workshop/create/${GameType.SLOTS.toLowerCase()}`}>
            <CreatePackCard
              title={workshopDictionary.createSlotsPack}
              image={<Image src={slotsImage} alt="Slots game image" />}
            />
          </Link>
          <CreatePackCard
            title={workshopDictionary.createTerritoryPack}
            image={<Image src={territoryImage} alt="Territory game image" />}
            comingSoon
          />
          <CreatePackCard
            title={workshopDictionary.createQuizPack}
            image={<Image src={quizImage} alt="Quiz game image" />}
            comingSoon
          />
        </div>
      </ContentPanel>
    </article>
  );
}
