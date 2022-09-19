import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api, Characters} from '../../api';
import {characterResultType} from '../../types';

interface CharactersState {
  data: characterResultType[];
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
  async (payload: number) => {
    const response = await api.getCharacters(payload);
    const updatedData: characterResultType[] = [];
    response.parsedBody?.results.map((item: characterResultType) => {
      updatedData.push({
        ...item,
        isFavourite: false,
      });
    });
    return updatedData as characterResultType[];
  },
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCharacters.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || [];
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const charactersSliceReducer = charactersSlice.reducer;
