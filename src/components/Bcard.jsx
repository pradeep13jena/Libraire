import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/bcard.css'

export default function Bcard(Props) {
  return (
    <div className="bcard">
      <div className="book_img">
        <img src={Props.src} alt={Props.title + 'image'} />
        <div className="books_buttons">
          <p className='squareArrow'><Link to={`/book/${Props.title}`}><i className="fa-solid fa-arrow-up-right-from-square"></i></Link></p>
          <p className='heart'><i className="fa-solid fa-heart"></i></p>
        </div>
      </div>
      <div className="book_details">
        <h1 className='book_title'>{Props.title}</h1>
        <p className='book_author'>{Props.author}</p>
        <p className='book_rating'>Rating: <span className="actual_rating">{Props.rating}</span></p>
        <p className='book_desc'>{Props.desc}</p>
      </div>
    </div>
  )
}