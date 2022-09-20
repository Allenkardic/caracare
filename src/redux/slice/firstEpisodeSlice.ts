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

export const fetchFirstEpisode = createAsyncThunk(
  'firstEpisode',
  async (payload: number) => {
    const response = await api.getFirstEpisode(payload);
    return response.parsedBody as EpisodeType;
  },
);

const firstEpisodeSlice = createSlice({
  name: 'firstEpisode',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFirstEpisode.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchFirstEpisode.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || {};
    });
    builder.addCase(fetchFirstEpisode.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const firstEpisodeSliceReducer = firstEpisodeSlice.reducer;
