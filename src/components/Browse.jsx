import React from 'react'
import Bcard from './Bcard'
import '../assets/styles/browse.css'
import { useDispatch, useSelector } from 'react-redux'

export default function Browse() {
  const AllBooks =  useSelector(state => state.books.books);
  return (
    <div className='browseSection'>
      <div className="searchBar">
        
      </div>
      <div className="LotBooks">
        {AllBooks.map(book => <Bcard key={book.id} id={book.id} is_bookmarked={book.is_bookmarked} src={book.image_url} alt={book.title} title={book.title} author={book.author} rating={book.rating} desc={book.description}/>)}
      </div>
    </div>
  )
}
