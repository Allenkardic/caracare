import {combineReducers} from '@reduxjs/toolkit';
import {charactersSliceReducer, favouriteCharactersSliceReducer} from './slice';

const rootReducer = combineReducers({
  characters: charactersSliceReducer,
  favouriteCharacters: favouriteCharactersSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
