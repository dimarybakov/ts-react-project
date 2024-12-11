import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUserName } from '../services/LoginByUsername/LoginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUserName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
