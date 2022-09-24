import {
  charactersSliceReducer,
  favouriteCharactersSliceReducer,
  singleCharacterSliceReducer,
  settingsSliceReducer,
} from './slice';
const state = {
  characters: charactersSliceReducer,
  favouriteCharacters: favouriteCharactersSliceReducer,
  singleCharacter: singleCharacterSliceReducer,
  settings: settingsSliceReducer,
};

export const testAppSelector = (f: any) => f(state);
