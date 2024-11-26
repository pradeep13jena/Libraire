import React from 'react'
import Bcard from './Bcard'
import '../assets/styles/genre.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../utils/features/addBooks'
import { useParams } from 'react-router-dom'
import { genreDesc } from '../utils/Data/genreDesc'

export default function Genre() {
  const {genre} = useParams()
  const genrebooks =  useSelector(state => state.books.books);
  const genreFilteredBooks = genrebooks.filter(book => book.genre.includes(genre))

  const description = genreDesc.filter(genreInfo =>  genreInfo.genre == genre)[0]

  return (
    <div className='genreSection'>
      <div className="genreDetails">
        <h1 className='genreHead'>{genre}</h1>
        <p className='genreText'>{description ? description.desc : ''}</p>
      </div>
      <div className="genreBooks">
        {genreFilteredBooks.map((book) => <Bcard key={book.id} id={book.id} is_bookmarked={book.is_bookmarked} src={book.image_url} alt={book.title} title={book.title} author={book.author} rating={book.rating} desc={book.description}/>)}
      </div>
    </div>
  )
}
