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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {uploadImage} from "../api/service"
import { useNavigate } from 'react-router-dom';
import { blue } from '@mui/material/colors';
const API_URL = "http://localhost:5005";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="right">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Wobbly
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome {currentUser.name} 
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
              <Button variant="contained" sx={{color: 'black',bgcolor: 'white'}}>Follower Count: 0</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8, bgcolor: 'white'}} minwidth="100%">
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
                    <Button size="small" sx={{color: 'white', bgcolor: '#112D4E'}}>Remove</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#112D4E', p: 6}} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          {/* Footer */}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          {/* Something here to give the footer a purpose! */}
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}