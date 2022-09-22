import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api, Characters} from '../../api';
import {characterResultType} from '../../types';

import {getNextPageFromUrl} from '../../constants';

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
  async (payload: any) => {
    const response = await api.getCharacters(payload);
    const updatedData: characterResultType[] = [];

    response.parsedBody?.results.map((item: characterResultType) => {
      updatedData.push({
        ...item,
        isFavourite: false,
        nextScreenNav: getNextPageFromUrl(
          response.parsedBody?.info?.next ?? '',
        ),
      });
    });

    // let nextpage = response.parsedBody?.info.next;

    // nextpage = getSecondPart(nextpage);

    // console.log(nextpage, 'next');
    // const newResponse = {
    //   nextpage,
    //   data: updatedData,
    // };

    // console.log(newResponse.data, 'jj');

    // return newResponse;

    return updatedData as characterResultType[];
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
