// src/components/Navbar/Navbar.js
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RadioIcon from '@mui/icons-material/Radio';
import styles from './Navbar.module.css';
import logo from './logo.png'; // Make sure to have a logo.png in the same directory

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static" className={styles.appBar} style={{ 
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid #ff6600'
    }}>
      <Toolbar sx={{ padding: '0 16px', minHeight: '80px !important' }}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Infinity Radio Panamá" className={styles.logo} />
          <RadioIcon sx={{ color: '#ff6600', marginLeft: 1, fontSize: 32 }} />
        </div>
        <Typography variant="h5" component="div" className={styles.title} sx={{
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #ff6600, #ffcc00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Infinity Radio
        </Typography>
        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <Button className={styles.menuItem}>Nosotros</Button>
          <Button className={styles.menuItem}>Noticias</Button>
          <Button className={styles.menuItem}>Programación</Button>
          <Button className={styles.menuItem}>Contacto</Button>
        </div>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleMenu} className={styles.menuButton}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;