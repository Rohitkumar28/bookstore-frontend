import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./Login.css"
import axios from 'axios';


const Addbook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');  
    const [image, setImage] = useState('');    

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:1000/book/add', {name, author, image})
        .then(res => {
            if(res.data.added) {
                navigate('/books')
            }else {
                console.log(res);
            }
        } )
        .catch(err => console.log(err))
      }

  return (
    <div className='login-page'>
      <form action="" onSubmit={handleSubmit}>
      <div className="login-container">
        <h2>Add Book</h2>
        <div className="form-group">
          <label htmlFor="name">Book Name:</label>
          <input type="text" name='name' id="name" placeholder='Enter Book Name' 
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input type="text" name='author' id='author' placeholder='Enter Author Name' 
          onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="text" name='image' id='image' placeholder='Image Url'
          onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button className='btn-login' >Add</button>
      </div>
      </form>
    </div>
  )
}

export default Addbook
