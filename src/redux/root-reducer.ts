import {combineReducers} from '@reduxjs/toolkit';
import {
  charactersSliceReducer,
  favouriteCharactersSliceReducer,
  singleCharacterSliceReducer,
  settingsSliceReducer,
} from './slice';

const rootReducer = combineReducers({
  characters: charactersSliceReducer,
  favouriteCharacters: favouriteCharactersSliceReducer,
  singleCharacter: singleCharacterSliceReducer,
  settings: settingsSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
