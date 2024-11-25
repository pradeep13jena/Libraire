import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../utils/features/addBooks'
import { useParams } from 'react-router-dom'

export default function Genre() {
  const {genre} = useParams()
  const genrebooks =  useSelector(state => state.books.books);
  const genreFilteredBooks = genrebooks.filter(book => book.genre.includes(genre))
  console.log(genre, genreFilteredBooks)
  return (
    <h1></h1>
  )
}
