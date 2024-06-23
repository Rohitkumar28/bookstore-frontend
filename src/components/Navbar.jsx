import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({role}) => {
  return (
    <div style={{borderBottom: "1px solid white "}}>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
         <Link className="navbar-brand text-white" to="/">
         BooksStrore
        </Link>
        <a className="navbar-brand text-white" href="#">
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-white"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <Link className="nav-item nav-link active text-white" to="/">
                Home
            </Link>
            <Link className="nav-item nav-link active text-white" to="/books">
                Books
            </Link>
            {role === 'admin' &&
             <>
               <Link className="nav-item nav-link active text-white" to="/addbook">Add Book</Link>
               <Link className="nav-item nav-link active text-white" to="/addstudent">Add Student</Link>
               <Link className="nav-item nav-link active text-white" to="/dashboard">Dashboard</Link>
             </>}
            {role === "" ? 
            <Link className="nav-item nav-link active text-white" to="/login"> Login</Link> :
            <Link className="nav-item nav-link active text-white" to="/logout"> Logout</Link>}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
