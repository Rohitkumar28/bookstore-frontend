import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import "./Login.css"
import axios from 'axios';
import { baseUrl } from '../urls';

const EditBook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');  
    const [image, setImage] = useState(''); 

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect( () => {
        axios.get(`${baseUrl}/book/book/`+id)
        .then(res => {
            setName(res.data.name)
            setAuthor(res.data.author)
            setImage(res.data.image)
        } )
        .catch(err => console.log(err))
      },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${baseUrl}/book/book/`+id, {name, author, image})
        .then(res => {
            if(res.data.updated) {
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
        <h2>Edit Book</h2>
        <div className="form-group">
          <label htmlFor="name">Book Name:</label>
          <input type="text" name='name' id="name" placeholder='Enter Book Name'
          value={name} 
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input type="text" name='author' id='author' placeholder='Enter Author Name'
          value={author} 
          onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="text" name='image' id='image' placeholder='Image Url'
          value={image}
          onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button className='btn-login' >Update</button>
      </div>
      </form>
    </div>
  )
}

export default EditBook
