import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../api';
import {CharacterResultType} from '../../types';

import {getNextPageFromUrl} from '../../constants';

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

export const fetchCharacters = createAsyncThunk(
  'characters',
  async (payload: any) => {
    const response = await api.getCharacters(payload);
    const updatedData: CharacterResultType[] = [];

    response.parsedBody?.results.map((item: CharacterResultType) => {
      updatedData.push({
        ...item,
        isFavourite: false,
        nextScreenNav: getNextPageFromUrl(
          response.parsedBody?.info?.next ?? '',
        ),
      });
    });

    return updatedData as CharacterResultType[];
  },
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    reset: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCharacters.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = state.data.concat(action.payload);
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const resetCharacters = charactersSlice.actions.reset;
export const charactersSliceReducer = charactersSlice.reducer;
