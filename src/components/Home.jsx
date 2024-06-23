import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <div className='Home-page bg-dark text-white container-fluid d-flex justify-content-center align-items-center'>
        <div className="row container">
            <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column " style={{height: "90vh"}}>
                <h2 style={{fontSize: "70px"}}>BOOK STORE </h2>
                <Link to="/books" className='viewBook '>View Books</Link>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{height: "90vh"}}>
                 <img style={{height:"60vh" , width: "60% ", borderRadius:"20px"}} src="https://images.unsplash.com/photo-1513001900722-370f803f498d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt='/' />
            </div>
        </div>
      
    </div>
  )
}

export default Home
