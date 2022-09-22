export type characterStatus = 'Alive' | 'Dead' | 'unknown';
export type characterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export type characterResultType = {
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
  isFavourite?: boolean;
  numberOfEpisode?: string;
  nextScreenNav?: string;
};

export type characterType = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: characterResultType[];
  // id: number;
  // name: string;
  // status: characterStatus;
  // species: string;
  // type: string;
  // gender: characterGender;
  // origin: {
  //   name: string;
  //   url: string;
  // };
  // location: {
  //   name: string;
  //   url: string;
  // };
  // image: string;
  // episode: any[];
  // url: string;
  // created: string;
  // isFavourite: boolean;
};
