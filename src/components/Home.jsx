import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Bcard from './Bcard'

// CSS import
import '../assets/styles/home.css'

// Store import
import { useDispatch, useSelector } from 'react-redux'
import { addItem, bookmartIT } from '../utils/features/addBooks'

export default function Home() {
  const books =  useSelector(state => state.books.books);
  const dispatch = useDispatch();
  const popularBooks = books.filter(book => book.rating > 4.6)
  const [client, setClient] = useState('Reader')
  const [val, setVal] = useState('')
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    const clientName = sessionStorage.getItem('name')
    if(clientName){
      setClient(clientName)
      setFlag(true)
    } else {
      setFlag(false)
    }
  }, [])

  function handleNameSubmit(e){
    e.preventDefault();
    if(val != ''){
      setClient(val.trimEnd())
      setFlag(true)
      sessionStorage.setItem('name', val)
    }
  }
  
  return (
    <section className='sectionHome'>
      <div className={flag ? 'askme_disable' : 'askme'}>
        <form className='askme_form' onSubmit={handleNameSubmit}>
          <input className='askme_form_input' onChange={(e) => setVal(e.target.value)} type="text" placeholder='Enter your name'/>
          <button className={val ? 'askme_form_button-close' : 'askme_form_button-open'} type="submit">Submit</button>
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
          <Link to={'genre/Mystery'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Mystery.png?updatedAt=1732715824411' alt="Mystery" /> </Link>
          <Link to={'genre/Romance'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Romance.png?updatedAt=1732715829407' alt="Romance" /> </Link>
          <Link to={'genre/Thriller'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Thriller.png?updatedAt=1732715829512' alt="Thriller" /> </Link>
          <Link to={'genre/Dystopian'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Dystopian.png?updatedAt=1732715824140' alt="Dystopian" /> </Link>
          <Link to={'genre/Horror'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Horror.png?updatedAt=1732715825306' alt="Horror" /> </Link>
          <Link to={'genre/Adventure'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Adventure.png?updatedAt=1732715823244' alt="Adventure" /> </Link>
          <Link to={'genre/Crime'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Crime.jpeg?updatedAt=1732715823304' alt="Crime" /> </Link>
          <Link to={'genre/Science Fiction'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Sci-fi.png?updatedAt=1732715829215' alt="Scifi" /> </Link>
          <Link to={'genre/Fantasy'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Fantasy.png?updatedAt=1732715823682' alt="Fantasy " /> </Link>
          <Link to={'genre/Fiction'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Fiction.png?updatedAt=1732715825336' alt="Fiction" /> </Link>
          <Link to={'genre/Historical'}> <img src='https://ik.imagekit.io/kf28wicizj/images/Historical.png?updatedAt=1732715823760' alt="Historical" /> </Link>
        </div>
      </div>
      <div className="viewPopularity">
        <h1 className='viewText'>or by <span className='textnamePopular'>Popularity</span></h1>
        <div className="popularBooks">
          {popularBooks.map((book) => <Bcard key={book.id} id={book.id} is_bookmarked={book.is_bookmarked} src={book.image_url} alt={book.title} title={book.title} author={book.author} rating={book.rating} desc={book.description}/>)}
        </div>
      </div>
    </section>
  )
}