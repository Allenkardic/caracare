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

export const addFavouriteCharacters = createAsyncThunk(
  'favouriteCharacters',
  async (payload: characterResultType[]) => {
    console.log(payload, 'payload');
    // const response = await api.getCharacters(payload);
    // const updatedData: characterResultType[] = [];
    // response.parsedBody?.results.map((item: characterResultType) => {
    //   updatedData.push({
    //     ...item,
    //     isFavourite: false,
    //   });
    // });
    return payload as characterResultType[];
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
