import ContentPanel from '@/app/_ui/layout/ContentPanel';
import React from 'react';

type Props = {
  name: string;
  description: string;
};

export default function PageHeader({ name, description }: Props) {
  return (
    <ContentPanel>
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="font-medium text-opposite-secondary">{description}</p>
    </ContentPanel>
  );
}
