import React from 'react'
import BSCreen from '../assets/images/bckup4042.jpg'
import '../assets/styles/ErrorPage.css'
import { Link } from 'react-router-dom'

export default function ErrorPage() {

  return (
    <div className='ErrorSection'>
      <img src={BSCreen} alt='404 Page' />
      <p className='greatKid'>Great shot, kid. That was one in a million.</p>
      <p className='letsget'>Now, let’s head <span><Link className='animateTheBack' to={'/'}>home</Link>.</span></p>
    </div>
  )
}
