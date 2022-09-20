import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../api';
import {EpisodeType} from '../../types';

interface EpisodeState {
  data: EpisodeType;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState = {
  data: {},
  status: 'idle',
  error: null,
} as EpisodeState;

export const fetchLastEpisode = createAsyncThunk(
  'lastEpisode',
  async (payload: number) => {
    const response = await api.getFirstEpisode(payload);
    return response.parsedBody as EpisodeType;
  },
);

const lastEpisodeSlice = createSlice({
  name: 'lastEpisode',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLastEpisode.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchLastEpisode.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || {};
    });
    builder.addCase(fetchLastEpisode.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const lastEpisodeSliceReducer = lastEpisodeSlice.reducer;
