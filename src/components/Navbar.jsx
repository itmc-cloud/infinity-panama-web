// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Navbar.module.css';
import logo from './logo.png'; // Make sure to have a logo.png in the same directory

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static" className={styles.appBar} style={{ backgroundColor: '#000000' }}>
      <Toolbar>
        <img src={logo} alt="Station Logo" className={styles.logo} />
        <Typography variant="h6" component="div" className={styles.title}>
          Radio Stream
        </Typography>
        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <Button className={styles.menuItem}>About Us</Button>
          <Button className={styles.menuItem}>News</Button>
          <Button className={styles.menuItem}>Contact Us</Button>
        </div>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleMenu} className={styles.menuButton}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;