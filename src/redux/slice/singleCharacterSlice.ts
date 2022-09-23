import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../api';
import {CharacterResultType} from '../../types';
import {getIdFromUrl} from '../../constants';

interface CharacterState {
  data: CharacterResultType;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState = {
  data: {},
  status: 'idle',
  error: null,
} as CharacterState;

export const fetchSingleCharacter = createAsyncThunk(
  'singleCharacter',
  async (payload: number) => {
    const response = await api.getSingleCharacter(payload);
    const episode: any = response.parsedBody?.episode;
    // get the index from the first episode
    const firstEpisode = getIdFromUrl(episode[0]);
    // get the index from the last episode
    const lastEpisode = getIdFromUrl(episode[episode.length - 1]);

    const firstEpisodeResponse = await api.getFirstEpisode(
      parseInt(firstEpisode),
    );
    const lastEpisodeResponse = await api.getLastEpisode(parseInt(lastEpisode));

    const updatedEpisode = {
      firstEpisode: firstEpisodeResponse.parsedBody,
      lastEpisode: lastEpisodeResponse.parsedBody,
    };

    let target = {
      ...response.parsedBody,
    };

    let newRecord = {
      id: response.parsedBody?.id,
      name: response.parsedBody?.name,
      status: response.parsedBody?.status,
      species: response.parsedBody?.species,
      type: response.parsedBody?.type,
      gender: response.parsedBody?.gender,
      origin: {
        name: response.parsedBody?.origin.name,
        url: response.parsedBody?.origin.url,
      },
      location: {
        name: response.parsedBody?.location.name,
        url: response.parsedBody?.origin.url,
      },
      image: response.parsedBody?.image,
      episode: [updatedEpisode],
      url: response.parsedBody?.url,
      created: response.parsedBody?.created,
      numberOfEpisode: response.parsedBody?.episode.length.toString(),
    };

    const merge = Object.assign(target, newRecord);

    return merge as CharacterResultType;
  },
);

const singleCharacterSlice = createSlice({
  name: 'singleCharacter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSingleCharacter.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchSingleCharacter.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || {};
    });
    builder.addCase(fetchSingleCharacter.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const singleCharacterSliceReducer = singleCharacterSlice.reducer;
