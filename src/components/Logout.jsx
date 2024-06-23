import  { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../urls';

const Logout = ({setRole}) => {
    const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${baseUrl}/auth/logout`)
    .then(res => {
        if(res.data.logout){
            setRole('')
            navigate('/')
        }
    }).catch(err => console.log(err))
  }, [])
}

export default Logout
