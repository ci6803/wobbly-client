import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/auth.context';

const ResponsiveAppBar = () => {

  const { isLoggedIn,logOutUser } = useContext(AuthContext);

  return (
    <motion.div initial={{y: -50}} animate={{y:0}}>
      <AppBar position="static" sx={{background: 'transparent'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isLoggedIn && (
          <Box>
            <Link style={{textDecoration: 'none', color: '#223843'}} to='/'><strong>HOME</strong></Link>
            <Link style={{textDecoration: 'none', color: '#223843', marginLeft: 20}} to='/festival'><strong>FESTIVALS</strong></Link>
            <Link style={{textDecoration: 'none', color: '#223843', marginLeft: 20}} to='/profile'><strong>PROFILE</strong></Link>
            <button onClick={logOutUser} style={{marginLeft: 20}}>Logout</button>
          </Box>
          )}
          {!isLoggedIn && (
           <Box>
            <Link style={{textDecoration: 'none', color: '#223843'}} to='/signup'><strong>SIGNUP</strong></Link>
            <Link style={{textDecoration: 'none', color: '#223843', marginLeft: 20}} to='/login'><strong>LOGIN</strong></Link>
            <Link style={{textDecoration: 'none', color: '#223843', marginLeft: 20}} to='/festival'><strong>FESTIVALS</strong></Link>
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
