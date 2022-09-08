import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import FestivalCard from '../components/FestivalCard';
const API_URL = "http://localhost:5005";

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
    <div className="FestivalsPage">

    {festivals.map((festival) => <FestivalCard key={festival._id} {...festival}/>)}

    </div>
  )
}
