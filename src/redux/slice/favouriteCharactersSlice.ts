import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CharacterResultType} from '../../types';

interface CharactersState {
  data: CharacterResultType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState = {
  data: [],
  status: 'idle',
  error: null,
} as CharactersState;

export const addFavouriteCharacters = createAsyncThunk(
  'favouriteCharacters',
  async (payload: CharacterResultType[]) => {
    return payload as CharacterResultType[];
  },
);

const favouriteCharactersSlice = createSlice({
  name: 'favouriteCharacters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addFavouriteCharacters.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(addFavouriteCharacters.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || [];
    });
    builder.addCase(addFavouriteCharacters.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const favouriteCharactersSliceReducer = favouriteCharactersSlice.reducer;
