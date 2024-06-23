import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BookCart from './BookCart';
import './Book.css';
import { baseUrl } from '../urls';

const Books = ({role}) => {
  const [books, setBooks] = useState([]);
  useEffect( () => {
    axios.get(`${baseUrl}/book/books`)
    .then(res => {
      setBooks(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  }, [])
  return (
    <div className="book-container">
      <div className='book-list'>
      {
        books.map(book => {
          return <BookCart key={book.id} book={book} role={role}/>
        })
      }
    </div>
    </div>
  )
}

export default Books
