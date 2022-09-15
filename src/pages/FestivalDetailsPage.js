import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container} from '@mui/system';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import  Box  from "@mui/material/Box";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5005';

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
    navigate(`/festival`);
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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#DBE2EF",
      },
      secondary: {
        main: "#F9F7F7",
      },
      info: {
        main: "#D0C5E7",
      },
      success: {
        main: "#DCCCBC",
      },
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <div className="FestivalDetailsPage">
      <div className='details-top'>
        <div className='details-first-section'>
          <Typography 
                component="h1" variant="h2"
                sx={{marginTop: 10}}
            >
                  {festival.name}
            </Typography>
          <img width={800} src={festival.image} alt="festivalImage" style={{borderRadius: 20}}/>
          <p>{festival.description}</p>
        </div>

        <div className='details-edit-add-section'>
          <Button
            color="info"
            variant="contained"
            size="large"
            component="a"
            href={`/festival/edit/${festivalId}`}
            sx={{ minWidth: 200, marginRight: 1 }}
          >
            Edit
          </Button>

          <Button
            color="info"
            variant="contained"
            size="large"
            component="a"
            sx={{ minWidth: 200 }}
            onClick={handleSubmitFestival}
          >
            Favourite
          </Button>
        </div>

        <Container className='details-comment-section' sx={{ marginTop: 5, boxShadow: 5, backgroundColor: '#DCCCBC', marginBottom: 5, paddingBottom: 5, width: 700, display: "flex"}}>
        <div>
        <h2>Comments</h2>
        {comments.map(comment => <li>{comment.message}</li>)}
        </div>
      </Container>

      <Container sx={{marginBottom: 5, display: 'flex'}}>
        <form onSubmit={handleSubmit}>
              <br/>

              <TextField
                name="message"
                id="message"
                label="Comment"
                autoFocus
                onChange={handleChange}
                sx={{ width: 700}}
            />

              <Button
              color="secondary"
              variant="contained"
              size="small"
              component="button"
              type='submit'
              sx={{ minWidth: 100, height: 55 }}
            >
              Submit
            </Button>
          </form>
      </Container>
      
    </div>
    </div>
    </ThemeProvider>
  );
}
