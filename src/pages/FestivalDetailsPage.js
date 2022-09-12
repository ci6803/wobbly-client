import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
const API_URL = "http://localhost:5005";

export default function FestivalDetailsPage() {
  const { user } = useContext(AuthContext);
  const [festival, setFestival] = useState({});
  const [comment, setComment] = useState('');
  const storedToken = localStorage.getItem('authToken');

  const { festivalId } = useParams();

  const navigate = useNavigate();

  const getFestival = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/festival/${festivalId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        const oneFestival = response.data;
        console.log(oneFestival);
        setFestival(oneFestival);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/api/festival/${festivalId}`, comment)
    navigate('/festival');
    setComment('');
  }

  function handleChange(e) {
    const value = e.target.value;
    setComment({
      message: value, 
      user: user
    })
  }


  useEffect(() => {
    console.log(festivalId);
    getFestival();
  }, [festivalId]);

  return (
    <div className="FestivalDetailsPage">
      <h1>{festival.name}</h1>
      <img src={festival.image} alt="festivalImage" />
      <p>{festival.description}</p>

      <Link to={`/festival/edit/${festivalId}`}>
        <button>Edit Festival</button>
      </Link>

      <h2>Add a comment:</h2>
      <form onSubmit={handleSubmit}>
          <label>Message:</label>
          <input type='text' name='message' onChange={handleChange}/>
          <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
