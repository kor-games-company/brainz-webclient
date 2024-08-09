import React from 'react';

type Props = {
  title: string;
  image: JSX.Element;
  isAvailable?: boolean;
};

export default function CreatePackCard({ title, image, isAvailable = true }: Props) {
  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-md bg-background p-4 xl:flex-col xl:gap-2">
      <div className="w-36 overflow-hidden rounded-md xl:w-fit">{image}</div>
      <p className="max-w-[40%] xl:max-w-fit">{title}</p>
    </div>
  );
}
