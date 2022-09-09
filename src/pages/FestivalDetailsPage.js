import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const API_URL = "http://localhost:5005";

export default function FestivalDetailsPage() {

  const [festival, setFestival] = useState({});

  const { festivalId } = useParams();

  const getFestival = () => {
    axios.get(`${API_URL}/api/festival/${festivalId}`)
          .then((response) => {
            const oneFestival = response.data;
            console.log(oneFestival);
            setFestival(oneFestival);
          })
          .catch(err => console.log(err));
  }

  useEffect(() => {
    console.log(festivalId);
    getFestival();
  }, [festivalId]);

  return (
    <div className='FestivalDetailsPage'>
        <h1>{festival.name}</h1>
        <img src={festival.image} alt='festivalImage'/> 
        <p>{festival.description}</p>
    </div>
  )
}
