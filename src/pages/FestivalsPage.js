import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import FestivalCard from '../components/FestivalCard/FestivalCard';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const API_URL = 'https://magenta-spider-cape.cyclic.app';

export default function FestivalsPage() {

  const [festivals, setFestivals] = useState([]);

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
      <div className="FestivalsPage">
    
    {festivals.map((festival) => <FestivalCard width="200" key={festival._id} {...festival}/>)}
    </div>
    <div>
      <Link to='/festival/add'><h2>Create an Upcoming Festival</h2></Link>
    </div>
    </div>
  )
}