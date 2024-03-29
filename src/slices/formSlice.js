// FormSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  phoneNumber: '',
  currentStep : 2
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
    updateCurrentStep(state,action){
      state.currentStep = action.payload;
    }
  },
});

export const { updateFullName, updatePhoneNumber,updateCurrentStep } = formSlice.actions;

// Define and export selectors
export const selectFullName = (state) => state.form.fullName;
export const selectPhoneNumber = (state) => state.form.phoneNumber;
export const selectCurrentStep = (state) => state.form.currentStep;

export default formSlice.reducer;
