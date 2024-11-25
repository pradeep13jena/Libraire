import React from 'react'
import { Link } from 'react-router-dom'

// CSS import
import '../assets/styles/home.css'

// Image import
import Adventure from '../assets/images/Adventure.png'
import Crime from '../assets/images/Crime.jpeg'
import Dystopian from '../assets/images/Dystopian.png'
import Fiction from '../assets/images/Fiction.png'
import Historical from '../assets/images/Historical.png'
import Horror from '../assets/images/Horror.png'
import Mystery from '../assets/images/Mystery.png'
import Romance from '../assets/images/Romance.png'
import Scifi from '../assets/images/Sci-fi.png'
import Thriller from '../assets/images/Thriller.png'
import Fantasy from '../assets/images/Fantasy.png'

export default function Home() {
  return (
    <section className='sectionHome'>
      <div className="welcome_message">
        <h1 className='welcome_salutation'>Welcome, Reader...</h1>
        <p className='welcome_text'>Discover your next favorite book or explore a treasure trove of resources. Let’s turn the page together!</p>
      </div>
      <hr />
      <div className="viewGenre">
        <h1 className='viewText'>View Books by <span className='textnameGenre'>Genre</span></h1>
        <div className="genreShoe">
          <Link to={'genre/fantasy'}> <img src={Fantasy} alt="Fantasy " /> </Link>
          <Link to={'genre/mystery'}> <img src={Mystery} alt="Mystery" /> </Link>
          <Link to={'genre/romance'}> <img src={Romance} alt="Romance" /> </Link>
          <Link to={'genre/adventure'}> <img src={Adventure} alt="Adventure" /> </Link>
          <Link to={'genre/horror'}> <img src={Horror} alt="Horror" /> </Link>
          <Link to={'genre/crime'}> <img src={Crime} alt="Crime" /> </Link>
          <Link to={'genre/dystopian'}> <img src={Dystopian} alt="Dystopian" /> </Link>
          <Link to={'genre/scifi'}> <img src={Scifi} alt="Scifi" /> </Link>
          <Link to={'genre/thriller'}> <img src={Thriller} alt="Thriller" /> </Link>
          <Link to={'genre/fiction'}> <img src={Fiction} alt="Fiction" /> </Link>
          <Link to={'genre/historical'}> <img src={Historical} alt="Historical" /> </Link>
        </div>
      </div>
      <div className="viewPopularity">
        <h1 className='viewText'>or by <span className='textnamePopular'>Popularity</span></h1>
        <div className="popularBooks">

        </div>
      </div>
    </section>
  )
}
