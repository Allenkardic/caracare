import {combineReducers} from '@reduxjs/toolkit';
import {charactersSliceReducer} from './slice';

const rootReducer = combineReducers({
  characters: charactersSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
