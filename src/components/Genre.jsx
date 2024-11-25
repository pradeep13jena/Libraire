import React from 'react'
import { useParams } from 'react-router-dom'

export default function Genre() {
  const {genre} = useParams()
  console.log(genre)
  return (
    <h1></h1>
  )
}
