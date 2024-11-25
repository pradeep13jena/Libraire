import { createSlice } from "@reduxjs/toolkit";
import books from '../Data/bookData'

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: books
  },
  reducers: {
    addItem: (state, action) => {
      state.book.push(action.payload)
    }
  }
})

export const {addItem} = booksSlice
export default booksSlice.reducer 