'use client';
import React, { useEffect } from 'react';
import { TImage } from '../lib/definitions';
import { useRouter } from 'next/navigation';

export default function Card<T extends { [key: string]: any }>(props: {
  data: T;
  fields: string[];
  imagePath: string;
  style?: React.CSSProperties;
  linkToUnit: string;
}) {
  const [src, setSrc] = React.useState('/loading.gif');
  const router = useRouter();

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      const resp = await fetch(props.imagePath);
      const imageData: TImage[] = await resp.json();
      setSrc(imageData[0].url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      onClick={() => router.push(props.linkToUnit)}
      className='block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black'
    >
      <div className='relative overflow-hidden bg-cover bg-no-repeat'>
        <img
          className='rounded-t-lg'
          src={src}
          alt={props.data.alt_names}
        />
      </div>
      <div className='p-6'>
        <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 '>
          {props.data.name}
        </h5>
        <p className='text-base'>{props.data.description}</p>
      </div>
    </div>
  );
}
