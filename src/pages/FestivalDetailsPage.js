import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
const API_URL = 'https://magenta-spider-cape.cyclic.app';

export default function FestivalDetailsPage() {
  const { user } = useContext(AuthContext);
  const [festival, setFestival] = useState({});
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([{}]);
  const { festivalId } = useParams();
  const navigate = useNavigate();

  const getFestival = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/festival/${festivalId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        const oneFestival = response.data;
        setFestival(oneFestival);
        setComments(oneFestival.comments);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/api/festival/${festivalId}`, comment)
    navigate('/festival');
    setComment('');
  }

  const handleSubmitFestival = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/api/festival/${festivalId}/add`, user);
    navigate(`/profile/${user._id}`);
  }

  function handleChange(e) {
    const value = e.target.value;
    setComment({
      message: value, 
      user: user
    })
  }

  useEffect(() => {
    getFestival();
    //eslint-disable-next-line 
  }, [festivalId]);

  return (
    <div className="FestivalDetailsPage">
      <br></br>
      <br></br>
      <h1>{festival.name}</h1>
      <img width={800} src={festival.image} alt="festivalImage" />
      <p>{festival.description}</p>
      <Link to={`/festival/edit/${festivalId}`}>
        <button>Edit Festival</button>
      </Link>
      <form onSubmit={handleSubmitFestival}>
        <button type='submit'>Add to your festivals</button>
      </form>
      <div>
        <h2>Comments:</h2>
        {comments.map(comment => <p>{comment.message}</p>)}
        <form onSubmit={handleSubmit}>
            <label>Add a comment:</label>
            <input type='text' name='message' onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
