import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  data: undefined,
  readonly: true,
  error: undefined,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: prifileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
