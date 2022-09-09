import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ResponsiveAppBar = () => {
  return (
    <motion.div initial={{y: -50}} animate={{y:0}}>
          <AppBar position="static" sx={{background: 'transparent'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Link style={{textDecoration: 'none', color: '#223843'}} to='/'><strong>HOME</strong></Link>
            <Link style={{textDecoration: 'none', color: '#223843', marginLeft: 20}} to='/festival'><strong>FESTIVALS</strong></Link>
            <Link style={{textDecoration: 'none', color: '#223843', marginLeft: 20}} to='/profile'><strong>PROFILE</strong></Link>
          </Box>
          {/* BELOW IS FOR IF THE USER IS NOT SIGNED IN */}
          {/* <Box>
            <Link style={{textDecoration: 'none', color: '#223843'}} to='/signup'><strong>SIGNUP</strong></Link>
            <Link style={{textDecoration: 'none', color: '#223843', marginLeft: 20}} to='/login'><strong>LOGIN</strong></Link>
            <Link style={{textDecoration: 'none', color: '#223843', marginLeft: 20}} to='/festival'><strong>FESTIVALS</strong></Link>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    </motion.div>
  );
};

export default ResponsiveAppBar;
