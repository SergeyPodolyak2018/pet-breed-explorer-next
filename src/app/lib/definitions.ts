export type TParametr = {
  name: string;
  value: string;
};

export type TBreedPatched = TBreed & { type: TBreedType };

export type TBreed = {
  id: number;
  name: string;
  description: string;
  alt_names: string;
  reference_image_id: string;
};

export type TImage = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type TBreedType = 'cat' | 'dog';
