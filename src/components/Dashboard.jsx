import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import axios from 'axios'
import { baseUrl } from '../urls';

const Dashboard = () => {
  const [student, setStudent] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [books, setBooks] = useState(0);
  useEffect(()=> {
    axios.get(`${baseUrl}/dashboard`)
    .then(res => {
      if(res.data.ok){
        setStudent(res.data.student);
        setAdmin(res.data.admin);
        setBooks(res.data.books)
      }
    }).catch(err => console.log(err))
  },[])
  return (
    <div className='dashboard'>
      <div className="dashboard-box">
          <h2>Total Books</h2>
          <h2>{books}</h2>
      </div>
      <div className="dashboard-box">
          <h2>Total Students</h2>
          <h2>{student}</h2>
      </div>
      <div className="dashboard-box">
          <h2>Total Admin</h2>
          <h2>{admin}</h2>
      </div>
    </div>
  )
}

export default Dashboard

