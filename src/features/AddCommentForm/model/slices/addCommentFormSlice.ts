import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
};

export const addCommentFormSlice = createSlice(
  {
    name: 'addCommentForm',
    initialState,
    reducers: {
      setText: (state, action: PayloadAction<string>) => {
        state.text = action.payload;
      },
    },
  },

  // extraReducers: (builder) => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   builder
  //     .addCase(loginByUserName.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUserName.fulfilled, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUserName.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
);

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
