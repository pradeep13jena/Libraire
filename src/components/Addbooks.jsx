import React, { useState } from 'react'
import '../assets/styles/addBooks.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../utils/features/addBooks'
import { useNavigate } from 'react-router-dom'

export default function Addbooks() {
  const books =  useSelector(state => state.books.books);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [exampleOne, setExampleOne] = useState(false)
  const [exampleTwo, setExampleTwo] = useState(false)

  const [imageValue, setImageValue] = useState("")
  const [authorValue, setauthorValue] = useState("")
  const [titleValue, settitleValue] = useState("")
  const [pageValue, setpageValue] = useState("")
  const [langugaeValue, setlangugaeValue] = useState("")
  const [genreValue, setgenreValue] = useState("")
  const [descValue, setdescValue] = useState("")
  const [ratingValue, setRatingValue] = useState("")

  const [imageFocus, setImageFocus] = useState(false)
  const [authorFocus, setAuthorFocus] = useState(false)
  const [titleFocus, setTitleFocus] = useState(false)
  const [pageFocus, setPageFocus] = useState(false)
  const [languageFocus, setLanguageFocus] = useState(false)
  const [genreFocus, setGenreFocus] = useState(false)
  const [ratingFocus, setratingFocuc] = useState(false)

  function handleAddBooks(e){
    e.preventDefault()
    const newGen = genreValue.split(',').map(gen => gen.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').trim())
    const newOBJ = {
      "id": books.length + 1,
      "image_url": imageValue,
      "title": titleValue,
      "author": authorValue,
      "language": langugaeValue,
      "pages": pageValue,
      "genre": newGen,
      "format": 'Hardcover',
      "description": descValue,
      "is_bookmarked": false,
      "rating": ratingValue,
    }
    dispatch(addItem({newOBJ}))
    navigate(`/browse?highlight=${books.length + 1}`)
  }
  
  return (
    <div className='addBooks_Section'>
      <div className="exampleBar">
        <h2 className='bookDetails_Info'>
        Our system manages book information for our Library. Below is a detailed breakdown of the data fields that can be added to the database, along with their requirements.
        </h2>
        <div>
          <h3 className='book_Constraints_header'>Constraints:</h3>
          <ol className='books_constraints'>
            <li>All of the fields are compulsory.</li>
            <li>Image should consist of URL of the Image.</li>
            <li>Rating should be a number between (1 to 5).</li>
            <li>Page should contain the total number of pages in the book.</li>
            <li>If there is more than 1 genre, Separate them my coma.</li>
          </ol>
        </div>
        <div className="exampleForBooks">
          <div className="exampleForBook">
            <div className='book_example_header' onClick={() =>setExampleOne(!exampleOne)}>
              <h3 className='ex1'>Example 1</h3>
              {exampleOne ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
            </div>
            <ul className={exampleOne ? 'exampleList-open' : 'exampleList-close'}>
              <li><b>Image:</b> https://i.pinimg.com/736x/94/a4/c4/94a4c4358cb78850732b3bb3b397783f.jpg</li>
              <li className='title_list'><b>Title:</b> Glitch</li>
              <li><b>Author:</b> Andrea Koroveshi</li>
              <li><b>page:</b> 250</li>
              <li><b>Language:</b> English</li>
              <li><b>Genre:</b> Thriller, Science Fiction</li>
              <li><b>Rating:</b> 4.2</li>
              <li><b>Description:</b>  A gripping cyberpunk thriller exploring the boundaries between humanity and artificial intelligence. Follow Alex, a rogue programmer, as they uncover a glitch in the AI-driven city of Nexos.</li>
            </ul>
          </div>
          <div className="exampleForBook">
            <div className='book_example_header' onClick={() =>setExampleTwo(!exampleTwo)}>
            <h3 className='ex1'>Example 2</h3>
            {exampleTwo ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
          </div>
          <ul className={exampleTwo ? 'exampleList-open' : 'exampleList-close'}>
              <li><b>Image:</b> https://i.pinimg.com/736x/cb/57/bb/cb57bbc4c4b1b77a5b0568625d18e535.jpg</li>
              <li className='title_list'><b>Title:</b> How to Be Eaten</li>
              <li><b>Author:</b> Maria Adelmann</li>
              <li><b>page:</b> 304</li>
              <li><b>Language:</b> English</li>
              <li><b>Genre:</b> Fiction</li>
              <li><b>Rating:</b> 4.0</li>
              <li><b>Description:</b>  A modern reimagining of fairy tales where five women meet in a support group to recount their trauma and reclaim their narratives. Dark, witty, and poignant.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='Form_Section'>
        <form className='addBooks_Form' onSubmit={(e) => handleAddBooks(e)}>
          <div className="divforBookImage_URL">
            <label className={imageFocus || imageValue ? 'addBooks_image_label-notFocus' : 'addBooks_image_label-focus'} htmlFor="book_image">Image URL</label> <br />
            <input required onChange={(e) => setImageValue(e.target.value)} onFocus={() => setImageFocus(true)} onBlur={() => setImageFocus(false)} type="text" id='book_image'className='addBooks_image_class'/>
          </div>
          <div className="addBooks_div1">
            <div className="divforBookTitle">
              <label className={titleFocus || titleValue?'addBooks_title_label-notFocus' : 'addBooks_author_label-focus'} htmlFor="book_title">Book Title</label> <br />
              <input required onChange={(e) => settitleValue(e.target.value)} onFocus={() => setTitleFocus(true)} onBlur={() => setTitleFocus(false)} type="text" id='book_title'className='addBooks_title_class'/>
            </div>
            <div className="divforBookAuthor">
              <label className={authorFocus || authorValue ?'addBooks_author_label-notFocus' : 'addBooks_author_label-focus'} htmlFor="book_author">Author Name</label> <br />
              <input required onChange={(e) => setauthorValue(e.target.value)} onFocus={() => setAuthorFocus(true)} onBlur={() => setAuthorFocus(false)} type="text" id='book_author' className='addBooks_author_class'/>
            </div>
          </div>
          <div className="addBooks_div1">
            <div className="divforBookPage">
              <label className={pageFocus || pageValue ? 'addBooks_page_label-notFocus' : 'addBooks_author_label-focus'} htmlFor="book_page">Pages</label> <br />
              <input required min='1' onChange={(e) => setpageValue(e.target.value)} onFocus={() => setPageFocus(true)} onBlur={() => setPageFocus(false)} type="number" name="addBook_bookPage" className='addBook_bookPage_class' id="book_page" />
            </div>
            <div className="divfor_bookLang">
              <label className={languageFocus || langugaeValue ?'addBooks_lang_label-notFocus' : 'addBooks_lang_label-focus'} htmlFor="book_lang">Language</label> <br />
              <input required onChange={(e) => setlangugaeValue(e.target.value)} onFocus={() => setLanguageFocus(true)} onBlur={() => setLanguageFocus(false)} type="text" name="addBook_bookLang" className='addBook_bookLang_class' id="book_lang" />
            </div>
          </div>
          <div className="addBooks_div1">
            <div className="divforGenre">
              <label className={genreFocus || genreValue? 'addBooks_genre_label-notFocus' : 'addBooks_genre_label-focus'} htmlFor="book_genre">Genre</label> <br />
              <input required onChange={(e) => setgenreValue(e.target.value)} onFocus={() => setGenreFocus(true)} onBlur={() => setGenreFocus(false)} type="text" name="addBook_bookGenre" className='addBook_bookGenre_class' id="book_genre" />
            </div>
            <div className="divforFormat">
              <label className={ratingFocus || ratingValue ? 'addBooks_format_label-focus' : 'addBooks_format_label-notFocus'} htmlFor="boook_format">Rating</label> <br />
              <input required step='0.1' min="1" max="5" onChange={(e) => setRatingValue(e.target.value)} onFocus={() => setratingFocuc(true)} onBlur={() => setratingFocuc(false)} type="number" name="addBook_bookLang" className='addBook_bookFormat_class' id="boook_format" />
            </div>
          </div>
          <div className="divfor_bookDesc">
              <label className='addBooks_desc_label-focus' htmlFor="book_desc">Description</label><br />
              <textarea required onChange={(e) => setdescValue(e.target.value)} placeholder='Should not more than 170 characters' name="addBook_bookDesc" id="book_desc" className='addBook_bookDesc_class'></textarea>
          </div>
          <button className='addBooks_submit' type="submit">Submit Book</button>
        </form>
      </div>
    </div>
  )
}