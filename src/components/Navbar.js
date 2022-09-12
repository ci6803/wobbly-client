import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/auth.context';
import Button from '@mui/material/Button';

const ResponsiveAppBar = () => {

  const { isLoggedIn,logOutUser} = useContext(AuthContext);

  return (
    <motion.div initial={{y: -50}} animate={{y:0}}>
      <AppBar position="static" sx={{background: 'transparent'}}>
      <Container maxWidth="l">
        <Toolbar disableGutters>
          {isLoggedIn && (
            <div>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
              <Button sx={{ my: 2, color: 'black', display: 'block', margin: 1}}>
                <Link style={{textDecoration: 'none', color: 'black', }} to='/'><strong>HOME</strong></Link>
              </Button>
              <Button sx={{ my: 2, color: 'black', display: 'block', margin: 1}}>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/festival'><strong>FESTIVALS</strong></Link>
              </Button>
              <Button sx={{ my: 2, color: 'black', display: 'block', margin: 1 }}>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/profile'><strong>PROFILE</strong></Link>
              </Button>
              <Button onClick={logOutUser} sx={{ my: 2, color: 'black', display: 'flex', background: '#d77a61', margin: 1, '&:hover': { backgroundColor: '#0a0a0a',color: 'white'}}}><strong>LOGOUT</strong></Button>  
            </Box>
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
