export type characterStatus = 'Alive' | 'Dead' | 'unknown';
export type characterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export type characterType = {
  id: number;
  name: string;
  status: characterStatus;
  species: string;
  type: string;
  gender: characterGender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: any[];
  url: string;
  created: string;
};
