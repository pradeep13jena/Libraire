import React, {useState} from 'react'
import Bcard from './Bcard'
import '../assets/styles/browse.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Browse() {
  const AllBooks =  useSelector(state => state.books.books);
  const [boxIsOpen, setBoxIsOpen] = useState(false)
  return (
    <div className='browseSection'>
      <div className="searchBar">
          <input type="text" placeholder='Search by Title or Author' />
          <div className="browseBar">
            <p onClick={() => {
              setBoxIsOpen(!boxIsOpen)
              console.log(boxIsOpen)
            }} className='browseClick'>Browse Genres {boxIsOpen ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</p>
            <div className={boxIsOpen ? 'genreContainer-open' : 'genreContainer-close'}>
              <div className="genresubContainer"><Link className='genreLink' to={'/genre/Fiction'}>Fiction</Link></div>
              <div className="genresubContainer"><Link className='genreLink' to={'/genre/Romance'}>Romance</Link></div>
              <div className="genresubContainer"><Link className='genreLink' to={'/genre/Science Fiction'}>Sci-Fi</Link></div>
              <div className="genresubContainer"><Link className='genreLink' to={'/genre/Thriller'}>Thriller</Link></div>
              <div className="genresubContainer"><Link className='genreLink' to={'/genre/Historical'}>Historical</Link></div>
              <div className="genresubContainer"><Link className='genreLink' to={'/genre/Horror'}>Horror</Link></div>
              <div className="genresubContainer"><Link className='genreLink' to={'/genre/Adventure'}>Adventure</Link></div>
              <div className="genresubContainer"><Link className='genreLink' to={'/genre/Dystopian'}>Dystopian</Link></div>
              <div className="genresubContainer"><Link className='genreLink' to={'/genre/Fantasy'}>Fantasy</Link></div>
              <div className="genresubContainer"><Link className='genreLink' to={'/genre/Mystery'}>Mystery</Link></div>
            </div>
          </div>
      </div>
      <div className="LotBooks">
      </div>
    </div>
  )
}
