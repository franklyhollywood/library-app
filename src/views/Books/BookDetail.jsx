import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'

function BookDetail() {
  const { booksId } = useParams() // TODO: Use id from route
  const [book, setBook] = useState(null)
  const id = booksId

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data))
  }, [id])

  if (!book) return <h3>Loading book...</h3>

  return (
    <>
      <Book book={book} showDetail />

      <p>Book Detail: {id}</p>

      <Link className="link" to="/Books">
        Link!
      </Link>
    </>
  )
}

export default BookDetail
