import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import FestivalCard from '../components/FestivalCard/FestivalCard';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5005';



const theme = createTheme({
  palette: {
    primary: {
      main: "#D0C5E7",
    },
    secondary: {
      main: "#DBE2EF",
    },
    info: {
      main: "#DCCCBC",
    },
    success: {
      main: "#F9F7F7",
    },
  },
});

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
    <ThemeProvider theme={theme}>
    <div className='festival-styling'>
      <div className="FestivalsPage">
    
    {festivals.map((festival) => <FestivalCard width="200" key={festival._id} {...festival}/>)}
    </div>
    <div>
      <Link to='/festival/add'><h2>Create an Upcoming Festival</h2></Link>
    </div>
    </div>
    </ThemeProvider>
  )
}