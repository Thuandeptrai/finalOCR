// imageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const PrescriptionSlice = createSlice({
  name: 'image',
  initialState: {
    imageUrl: null,
  },
  reducers: {
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setImageUrl } = PrescriptionSlice.actions;
export const selectImageUrl = (state: any) => state.image.imageUrl;
export default PrescriptionSlice.reducer;
