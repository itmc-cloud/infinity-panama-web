import React from 'react';
import { Typography, Box } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <Box className="header-background" sx={{ padding: '16px', textAlign: 'center' }}>
      <Typography variant="h4">Welcome to Our Radio Stream</Typography>
    </Box>
  );
};

export default Header;