import * as React from 'react';
import { useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/auth.context';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import './Navbar.css';


const ResponsiveAppBar = () => {

  const { isLoggedIn,logOutUser} = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  return (
    <motion.div initial={{y: -50}} animate={{y:0}}>
      <AppBar position="static" sx={{background: 'transparent'}}>
      <Container maxWidth="l">
        <Toolbar disableGutters>
          {isLoggedIn && (
            <div className='navbar-container'>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
              <Button sx={{ my: 2, color: 'black', display: 'block', margin: 1}}>
                <Link style={{textDecoration: 'none', color: 'black', }} to='/'><strong>HOME</strong></Link>
              </Button>
              <Button sx={{ my: 2, color: 'black', display: 'block', margin: 1}}>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/festival'><strong>FESTIVALS</strong></Link>
              </Button>
              <Button sx={{ my: 2, color: 'black', display: 'block', margin: 1 }}>
                <Link style={{textDecoration: 'none', color: 'black'}} to={`/profile/${user._id}`}><strong>PROFILE</strong></Link>
              </Button>
            </Box>
            <Button onClick={logOutUser} sx={{ my: 2, color: 'black', display: 'flex', background: '#DBE2EF', margin: 1, '&:hover': { backgroundColor: '#3F72AF',color: 'white'}}}><strong>LOGOUT</strong></Button> 
            <Avatar alt="User" src={user.image} sx={{marginLeft: 1, marginRight: 1, marginTop: 0.5}}/> 
            </div>
          )}
          {!isLoggedIn && (
           <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Button sx={{ my: 2, color: 'black', display: 'block', margin: 1 }}>
              <Link style={{textDecoration: 'none', color: 'black'}} to='/signup'><strong>SIGNUP</strong></Link>
            </Button>
            <Button sx={{ my: 2, color: 'black', display: 'block', margin: 1}}>
            <Link style={{textDecoration: 'none', color: 'black'}} to='/login'><strong>LOGIN</strong></Link>
            </Button>
            <Button sx={{ my: 2, color: 'black', display: 'block', margin: 1}}>
              <Link style={{textDecoration: 'none', color: 'black'}} to='/festival'><strong>FESTIVALS</strong></Link>
            </Button>
          </Box> 
          )}
        </Toolbar>
      </Container>
    </AppBar>
    </motion.div>
  );
};
//navbar
export default ResponsiveAppBar;