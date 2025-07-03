import { createSlice } from '@reduxjs/toolkit';
import BookData from '../utils/BookData'; // your existing mockdata

const bookSlice = createSlice({
  name: 'books',
  initialState: BookData, // initialize with mock data
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload); // Add new book to array
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
