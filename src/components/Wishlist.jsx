import React from 'react'
import Bcard from './Bcard'
import emptyWish from '../assets/images/emptyWishlist.png'
import '../assets/styles/wishlist.css'
import { addItem } from '../utils/features/addBooks'
import { useDispatch, useSelector } from 'react-redux'

export default function Wishlist() {
  const majorArray = useSelector(state => state.books.books);
  const wishlistArray = majorArray.filter(book => book.is_bookmarked == true)

  return (
    <div className='wishlistSection'>
  {wishlistArray.length > 0 ? (
    <div>
      <div className="wishlistDetails">
        <h1 className='wishlistHead'>
        Wishlist
        </h1>
      </div>
      <div className="wishlistbooks">
        {wishlistArray.map((book) => (
          <Bcard 
            key={book.id}
            id={book.id}
            is_bookmarked={book.is_bookmarked}
            src={book.image_url}
            alt={book.title}
            title={book.title}
            author={book.author}
            rating={book.rating}
            desc={book.description}
          />
        ))}
      </div>
    </div>
  ) : (
      <h1 className='noWish'>Haven't found a favorite yet? Browse through our selection and add books to your bookmarks!</h1>
  )}
</div>
)}