import React from 'react';
import { TBreedPatched } from '../lib/definitions';
import Card from './universalCard';
import { BREED_FIEDLS, IMAGES, LINK_TO_UNIT } from '@/app/lib/const';

export default function CardsAgregator(props: { data: TBreedPatched[] }) {
  return (
    <>
      {props.data.map((data) => (
        <Card
          key={data.id}
          data={data}
          fields={BREED_FIEDLS[data.type]}
          imagePath={IMAGES[data.type] + `?breed_ids=${data.id}`}
          linkToUnit={LINK_TO_UNIT[data.type] + `/${data.id}`}
        ></Card>
      ))}
    </>
  );
}
