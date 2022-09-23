export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';
export type AvailableStatusType = {
  name: CharacterStatus;
  isFiltering: boolean;
};
export type CharacterResultType = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
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

export type CharacterType = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharacterResultType[];
};
