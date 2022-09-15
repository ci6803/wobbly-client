import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import FestivalCard from '../components/FestivalCard/FestivalCard';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5005';

export default function FestivalsPage() {

  const [festivals, setFestivals] = useState([]);

  const navigate = useNavigate();

  const getAllFestivals = () => {
    axios
      .get(`${API_URL}/api/festival`)
      .then(response => setFestivals(response.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getAllFestivals();
  }, [])

  
  return (
    <div className='festival-styling'>
      <Button
          sx={{color: 'black',bgcolor: '#D0C5E7', '&:hover' : { backgroundColor: 'white'}}}
          variant="contained"
          onClick={() => {
          navigate('/festival/add')
        }}
      >
        Create Festival
        </Button>
    <div className="FestivalsPage">
      {festivals.map((festival) => <FestivalCard width="200" key={festival._id} {...festival}/>)}
    </div>
    </div>
  )
}