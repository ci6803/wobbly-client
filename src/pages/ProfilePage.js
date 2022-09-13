import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const API_URL = "http://localhost:5005";


export default function ProfilePage() {
  const { profileId } = useParams();
  const [currentUser, setCurrentUser] = useState({});
  const [festivals, setFestivals] = useState([{}]);

  const getUser = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
    .get(`${API_URL}/api/profile/${profileId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
    .then((response) => {
      const oneUser = response.data;
      setCurrentUser(oneUser);
      setFestivals(oneUser.festivals);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUser();
    console.log(festivals);
  }, [])

  return (
    <div>

      <h1>Welcome back {currentUser.name}</h1>
      <br>
      </br>
      <img src={currentUser.image} alt="users-pic" width={300} />
      <p>Followers</p>
      <p>Rating</p>
      <p>Message</p>
      <Container>

      <p>List of fav festivals</p>
      {/* <h1>{festivals[0].name}</h1>
      <h1>{festivals[0].description}</h1> */}
      </Container>
    </div>
  )
}
