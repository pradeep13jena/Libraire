import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../utils/features/addBooks'

export const store = configureStore({
  reducer: {
    books: booksReducer
  },
})