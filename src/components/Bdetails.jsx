import React from 'react'
import { useParams } from 'react-router-dom'

export default function Bdetails() {
  const {book} = useParams()
  return (
    <h1>{book}</h1>
  )
}
