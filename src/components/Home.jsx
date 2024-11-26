import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Bcard from './Bcard'

// CSS import
import '../assets/styles/home.css'

// Store import
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../utils/features/addBooks'

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
  const books =  useSelector(state => state.books.books);
  const popularBooks = books.filter(book => book.rating > 4.6)
  const [client, setClient] = useState('Reader')
  const [val, setVal] = useState('')
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    const clientName = sessionStorage.getItem('name')
    console.log(clientName)
    if(clientName){
      setClient(clientName)
      setFlag(true)
    } else {
      setFlag(false)
    }
  }, [])

  function handleNameSubmit(e){
    e.preventDefault();
    setClient(val)
    setFlag(true)
    sessionStorage.setItem('name', val)
  }
  
  return (
    <section className='sectionHome'>
      <div className={flag ? 'askme_disable' : 'askme'}>
        <form className='askme_form' onSubmit={handleNameSubmit}>
          <input className='askme_form_input' onChange={(e) => setVal(e.target.value)} type="text" placeholder='Enter your name'/>
          <button className='askme_form_button' type="submit">Submit</button>
        </form>
      </div>
      <div className="welcome_message">
        <h1 className='welcome_salutation'>Welcome, {client}...</h1>
        <p className='welcome_text'>Discover your next favorite book or explore a treasure trove of resources. Let’s turn the page together!</p>
      </div>
      <hr />
      <div className="viewGenre">
        <h1 className='viewText'>View Books by <span className='textnameGenre'>Genre</span></h1>
        <div className="genreShoe">
          <Link to={'genre/Mystery'}> <img src={Mystery} alt="Mystery" /> </Link>
          <Link to={'genre/Romance'}> <img src={Romance} alt="Romance" /> </Link>
          <Link to={'genre/Thriller'}> <img src={Thriller} alt="Thriller" /> </Link>
          <Link to={'genre/Dystopian'}> <img src={Dystopian} alt="Dystopian" /> </Link>
          <Link to={'genre/Horror'}> <img src={Horror} alt="Horror" /> </Link>
          <Link to={'genre/Adventure'}> <img src={Adventure} alt="Adventure" /> </Link>
          <Link to={'genre/Crime'}> <img src={Crime} alt="Crime" /> </Link>
          <Link to={'genre/Science Fiction'}> <img src={Scifi} alt="Scifi" /> </Link>
          <Link to={'genre/Fantasy'}> <img src={Fantasy} alt="Fantasy " /> </Link>
          <Link to={'genre/Fiction'}> <img src={Fiction} alt="Fiction" /> </Link>
          <Link to={'genre/Historical'}> <img src={Historical} alt="Historical" /> </Link>
        </div>
      </div>
      <div className="viewPopularity">
        <h1 className='viewText'>or by <span className='textnamePopular'>Popularity</span></h1>
        <div className="popularBooks">
          {popularBooks.map((book) => <Bcard key={book.id} is_bookmarked={book.is_bookmarked} src={book.image_url} alt={book.title} title={book.title} author={book.author} rating={book.rating} desc={book.description}/>)}
        </div>
      </div>
    </section>
  )
}