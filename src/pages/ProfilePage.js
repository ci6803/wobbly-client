
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
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const API_URL = "http://localhost:5005";
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright() {


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

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function Album() {
  const { user } = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
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
              Welcome {user.name}
              <br></br>
              <Button variant="contained">Upload Image</Button>
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
        <Container sx={{ py: 8, bgcolor: 'white'}} maxWidth="100%">
        <Container sx={{ py: 8, bgcolor: 'white'}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' , bgcolor: '#3F72AF', boxShadow: 10 }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                     
                    }}
                    image="../../Reading-and-Leeds-Festival-2022-Everything-you-need-to-know.jpeg"
                    alt="festival"
                  />
                  <CardContent sx={{ flexGrow: 1 , bgcolor: '#3F72AF', color: '#DBE2EF'}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Festival Name
                    </Typography>
                    <Typography>
                      Festival details
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
      <Box sx={{ bgcolor: '#112D4E', p: 6 }} component="footer">
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
