import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'

function BookDetail() {
  const id = 1 // TODO: Use id from route
  const [book, setBook] = useState(null)

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data))
  }, [id])

  if (!book) return <h3>Loading book...</h3>

  return (
    <>
      <Book book={book} showDetail />
      <Link to="BookList" />
      <p>Book Detail: {bookId}</p>
    </>
  )
}

export default BookDetail
