import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./Login.css"
import axios from 'axios';

const Addstudent = () => {
    const [roll, setRoll] = useState('');
    const [username, setUsername] = useState('');  
    const [grade, setGrade] = useState('');  
    const [password, setPassword] = useState('');  

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:1000/student/register', {roll, username, grade, password})
        .then(res => {
            if(res.data.registered){
                navigate('/dashboard');
            }
            console.log(res);
        } )
        .catch(err => console.log(err))
      }
  
  return (
    <div className='login-page'>
      <form action="" onSubmit={handleSubmit}>
      <div className="login-container">
        <h2>Add Student</h2>
        <div className="form-group">
          <label htmlFor="roll">Roll No:</label>
          <input type="text" name='roll' id="roll" placeholder='Enter Roll No' 
          onChange={(e) => setRoll(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" name='username' id='username' placeholder='Enter Username' 
          onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input type="text" name='grade' id='grade' placeholder='Enter Grade' 
          onChange={(e) => setGrade(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input type="password" name='password' id='password' placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='btn-login' >Register</button>
      </div>
      </form>
    </div>
  )
}

export default Addstudent
