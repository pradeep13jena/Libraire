import React, { useState } from 'react'
import '../assets/styles/addBooks.css'
export default function Addbooks() {
  const [authorValue, setauthorValue] = useState("")
  const [titleValue, settitleValue] = useState("")
  const [pageValue, setpageValue] = useState("")
  const [langugaeValue, setlangugaeValue] = useState("")
  const [genreValue, setgenreValue] = useState("")

  const [authorFocus, setAuthorFocus] = useState(false)
  const [titleFocus, setTitleFocus] = useState(false)
  const [pageFocus, setPageFocus] = useState(false)
  const [languageFocus, setLanguageFocus] = useState(false)
  const [genreFocus, setGenreFocus] = useState(false)
  return (
    <div className='addBooks_Section'>
      <form className='addBooks_Form'>
        <div className="divforBookTitle">
          <label className={titleFocus || titleValue?'addBooks_title_label-notFocus' : 'addBooks_author_label-focus'} htmlFor="book_title">Book Title</label> <br />
          <input  onChange={(e) => settitleValue(e.target.value)} onFocus={() => setTitleFocus(true)} onBlur={() => setTitleFocus(false)} type="text" id='book_title'className='addBooks_title_class'/>
        </div>
        <div className="divforBookAuthor">
          <label className={authorFocus || authorValue ?'addBooks_author_label-notFocus' : 'addBooks_author_label-focus'} htmlFor="book_author">Author Name</label> <br />
          <input  onChange={(e) => setauthorValue(e.target.value)} onFocus={() => setAuthorFocus(true)} onBlur={() => setAuthorFocus(false)} type="text" id='book_author' className='addBooks_author_class'/>
        </div>
        <div className="addBooks_div1">
          <div className="divforBookPage">
            <label className={pageFocus || pageValue?'addBooks_page_label-notFocus' : 'addBooks_author_label-focus'} htmlFor="book_page">Pages</label> <br />
            <input  onChange={(e) => setpageValue(e.target.value)} onFocus={() => setPageFocus(true)} onBlur={() => setPageFocus(false)} type="number" name="addBook_bookPage" className='addBook_bookPage_class' id="book_page" />
          </div>
          <div className="divfor_bookLang">
            <label className={languageFocus || langugaeValue ?'addBooks_lang_label-notFocus' : 'addBooks_lang_label-focus'} htmlFor="book_lang">Language</label> <br />
            <input  onChange={(e) => setlangugaeValue(e.target.value)} onFocus={() => setLanguageFocus(true)} onBlur={() => setLanguageFocus(false)} type="text" name="addBook_bookLang" className='addBook_bookLang_class' id="book_lang" />
          </div>
        </div>
        <div className="addBooks_div2">
          <div className="divforGenre">
            <label className={genreFocus || genreValue?'addBooks_genre_label-notFocus' : 'addBooks_genre_label-focus'} htmlFor="book_genre">Genre</label> <br />
            <input  onChange={(e) => setgenreValue(e.target.value)} onFocus={() => setGenreFocus(true)} onBlur={() => setGenreFocus(false)} type="text" name="addBook_bookGenre" className='addBook_bookGenre_class' id="book_genre" />
          </div>
          <div className="divforFormat">
            <label className='addBooks_format_label' htmlFor="boook_format">Format:</label> <br />
            <input type="text" value='Hardcover' disabled name="addBook_bookLang" className='addBook_bookFormat_class' id="boook_format" />
          </div>
        </div>
        <div className="divfor_bookDesc">
            <label className='addBooks_desc_label' htmlFor="book_desc">Description</label><br />
            <textarea placeholder='Not more than 170 characters' name="addBook_bookDesc" id="book_desc" className='addBook_bookDesc_class'></textarea>
        </div>
      </form>
    </div>
  )
}
