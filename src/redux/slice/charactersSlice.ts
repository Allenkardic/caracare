import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api, Characters} from '../../api';

interface TradesState {
  data: Characters | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState = {
  data: undefined,
  status: 'idle',
  error: null,
} as TradesState;

export const fetchCharacter = createAsyncThunk('characters', async () => {
  const response = await api.getCharacter();
  return response.parsedBody as Characters;
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCharacter.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchCharacter.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || [];
    });
    builder.addCase(fetchCharacter.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const charactersSliceReducer = charactersSlice.reducer;
