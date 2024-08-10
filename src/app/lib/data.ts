import {
  TBreed,
  TBreedPatched,
  TBreedType,
  TImage,
} from '@/app/lib/definitions';
import { IMAGES, PATH, SUB_PATH } from './const';
import { addParamsToUrl } from '@/app/lib/utils';

export async function fetchBreads(type: TBreedType) {
  try {
    const url = addParamsToUrl(PATH[type] + SUB_PATH.breads, [
      { name: 'limit', value: '10' },
    ]);

    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });

    const rez: TBreed[] = await data.json();
    const rezPatch: TBreedPatched[] = rez.map((el) => ({ ...el, type: type }));
    return rezPatch;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch cats.');
  }
}

export async function fetchAllBreeds() {
  try {
    const cats = await fetchBreads('cat');
    const dogs = await fetchBreads('dog');
    return [...cats, ...dogs];
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch dogs.');
  }
}

export async function fetchSingleBreed(id: string, type: TBreedType) {
  try {
    const url = addParamsToUrl(PATH[type] + SUB_PATH.breads + `/${id}`, []);
    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });

    const rez: TBreed = await data.json();

    const rezPatch: TBreedPatched = { ...rez, type: type };

    return rezPatch;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch cats.');
  }
}

export async function fetchImages(id: string, type: TBreedType) {
  try {
    const url = addParamsToUrl(IMAGES[type], [
      { name: 'limit', value: '10' },
      { name: 'breed_ids', value: id },
    ]);
    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });
    const rez: TImage[] = await data.json();
    return rez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch cats.');
  }
}

export async function fetchAgregatedDataBreeds(id: string, type: TBreedType) {
  try {
    const breed = await fetchSingleBreed(id, type);
    const images = await fetchImages(id, type);
    return { data: breed, images };
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch agregated data.');
  }
}
