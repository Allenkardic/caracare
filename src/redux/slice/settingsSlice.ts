import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {SettingsType} from '../../types';

interface SettingsState {
  data: SettingsType;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState = {
  data: {
    theme: 'light',
    isCharacterScreenGrid: false,
  },
  status: 'idle',
  error: null,
} as SettingsState;

export const fetchSettings = createAsyncThunk(
  'settings',
  async (payload: SettingsType) => {
    return payload as SettingsType;
  },
);

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSettings.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchSettings.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || {};
    });
    builder.addCase(fetchSettings.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const settingsSliceReducer = settingsSlice.reducer;
