import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./Login.css"
import axios from 'axios';
import { baseUrl } from '../urls';

const Login = ({setRoleVar}) => {
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const [role, setRole] = useState('student');

  axios.defaults.withCredentials = true ;
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios.post(`${baseUrl}/auth/login`, {username, password, role})
    .then(res => {
      if(res.data.login && res.data.role === 'admin'){
        setRoleVar('admin')
        navigate('/dashboard')
      }else if(res.data.login && res.data.role === 'student'){
        setRoleVar('student')
        navigate('/');
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='login-page'>
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text"  placeholder='Enter Username' 
          onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input type="password"  placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select name="role" id="role"
           onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>            
            <option value="student">Student</option>            
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login
