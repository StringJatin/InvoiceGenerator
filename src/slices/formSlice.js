// FormSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  phoneNumber: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFullName(state, action) {
      state.fullName = action.payload;
    },
    updatePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export const { updateFullName, updatePhoneNumber } = formSlice.actions;

// Define and export selectors
export const selectFullName = (state) => state.form.fullName;
export const selectPhoneNumber = (state) => state.form.phoneNumber;

export default formSlice.reducer;
