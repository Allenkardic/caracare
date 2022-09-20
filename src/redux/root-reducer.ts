import {combineReducers} from '@reduxjs/toolkit';
import {
  charactersSliceReducer,
  favouriteCharactersSliceReducer,
  firstEpisodeSliceReducer,
  lastEpisodeSliceReducer,
  singleCharacterSliceReducer,
  settingsSliceReducer,
} from './slice';

const rootReducer = combineReducers({
  characters: charactersSliceReducer,
  favouriteCharacters: favouriteCharactersSliceReducer,
  firstEpisode: firstEpisodeSliceReducer,
  lastEpisode: lastEpisodeSliceReducer,
  singleCharacter: singleCharacterSliceReducer,
  settings: settingsSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
