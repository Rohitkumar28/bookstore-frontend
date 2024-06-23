import {BrowserRouter as Router,Route, Routes,} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Books from "./components/Books";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Addstudent from "./components/Addstudent";
import { useEffect, useState } from "react";
import Logout from "./components/Logout";
import axios from 'axios';
import Addbook from "./components/Addbook";
import EditBook from "./components/EditBook";
import Delete from "./components/Delete";
import { baseUrl } from "./urls";

function App() {
  const [role, setRole] = useState()

  axios.defaults.withCredentials = true ;
  useEffect(() => {
    axios.get(`${baseUrl}/auth/verify`,{ withCredentials: true })
    .then(res => {
      if(res.data.login){
        setRole(res.data.role)
      }else {
        setRole("")
      }
      console.log(res)
    }).catch(err => console.log(err));
  },[])

  return (
    <Router>
      <Navbar  role={role}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/books" element={<Books role={role}/>}></Route>
        <Route path="/login" element={<Login setRoleVar={setRole}/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/addstudent" element={<Addstudent/>}></Route>
        <Route path="/logout" element={<Logout setRole={setRole}/>}></Route>
        <Route path="/addbook" element={<Addbook/>}></Route>
        <Route path="/book/:id" element={<EditBook/>}></Route>
        <Route path="/delete/:id" element={<Delete/>}></Route>☻
      </Routes>
    </Router>
  );
}

export default App;
