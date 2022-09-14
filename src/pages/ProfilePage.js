import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {uploadImage} from "../api/service"
import { useNavigate } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL || 'https://magenta-spider-cape.cyclic.app';

const theme = createTheme();

export default function Album() {
  const { profileId } = useParams();
  const [currentUser, setCurrentUser] = useState({});
  const [festivals, setFestivals] = useState([{}]);
  const [image, setImage] = useState('');

  const navigate = useNavigate();

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

const handleFileUpload = (e) => {
  const uploadData = new FormData();

  uploadData.append('image', e.target.files[0])
  
  uploadImage(uploadData)
  .then(response => {
      setImage(response.fileUrl);
  })
  .catch(err => console.log("Error while uploading file: ", err))
}

const handleSubmit =  async (e) => {
  e.preventDefault();
  await axios.post(`${API_URL}/api/profile/${profileId}/photo`, image);
  navigate('/');
}

const handleRemove = (e, id) => {
  e.preventDefault();
  axios.post(`${API_URL}/api/profile/${profileId}/remove`, id);
  navigate('/festival');
}

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <br></br>
      <br></br>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#DBE2EF',
            pt: 4,
            pb: 5,
          }}
        >
        <br></br>
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome, {currentUser.name} 
              <br></br>
              <img src={currentUser.image} alt="profile" width={200}>
                </img>
              <br></br>
              <form onSubmit={handleSubmit}>
              <input type="file" onChange={(e) => handleFileUpload(e)} />
              <button type="submit">Submit</button>
              </form>
              
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" sx={{color: 'white',bgcolor: 'black'}}>Follow Me</Button>
              <Button
              sx={{color: 'black',bgcolor: 'white'}}
              variant="contained"
              onClick={() => {
                navigate('/join')
              }}
                >
                Join A Chat Room
              </Button>

            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8, bgcolor: 'white'}} minwidth="100%" minheight="100%">
        <Container sx={{ py: 8, bgcolor: 'white'}} maxwidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {festivals.map((festival) => (
              <Grid item key={festival._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' , bgcolor: '#3F72AF', boxShadow: 10 }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                     
                    }}
                    image={festival.image}
                    alt="festival"
                  />
                  <CardContent sx={{ flexGrow: 1 , bgcolor: '#3F72AF', color: '#DBE2EF'}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {festival.name}
                    </Typography>
                    <Typography>
                      {festival.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <form onSubmit={(e) => {handleRemove(e, festival._id)}}>
                      <Button type='submit' size="small" sx={{color: 'white', bgcolor: '#112D4E'}}>Remove</Button>
                    </form>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Container>
      </main>
    </ThemeProvider>
  );
}