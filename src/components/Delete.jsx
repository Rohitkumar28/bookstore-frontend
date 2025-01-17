import  { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../urls';

const Delete = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        axios.delete(`${baseUrl}/book/book/`+id)
        .then(res => {
            if(res.data.deleted){
                navigate('/books')
            }
        }).catch(err => console.log(err))
      }, [])
}

export default Delete
