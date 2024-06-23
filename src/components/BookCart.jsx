import React from 'react'
import './Book.css';
import { Link } from "react-router-dom";

const BookCart = ({book, role}) => {
    const {name, author, image} = book ;
  return (
    <div className='book-card'>
        <img src={image} alt={name} className='book-image' />
        <div className="book-details">
            <h5>{name}</h5>
            <p>By : {author}</p>
        </div>
        {role === "admin" &&
         <>
             <div className="book-action">
                 <button><Link className='btn-link' to={`/book/${book._id}`}>edit</Link></button>
                 <button><Link className='btn-link' to={`/delete/${book._id}`}>delete</Link></button>
              </div>
         </>}
    </div>
  )
}

export default BookCart
