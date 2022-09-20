import {combineReducers} from '@reduxjs/toolkit';
import {
  charactersSliceReducer,
  favouriteCharactersSliceReducer,
  firstEpisodeSliceReducer,
  lastEpisodeSliceReducer,
  singleCharacterSliceReducer,
} from './slice';

const rootReducer = combineReducers({
  characters: charactersSliceReducer,
  favouriteCharacters: favouriteCharactersSliceReducer,
  firstEpisode: firstEpisodeSliceReducer,
  lastEpisode: lastEpisodeSliceReducer,
  singleCharacter: singleCharacterSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
