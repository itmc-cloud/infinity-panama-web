import React from 'react';
import { Typography, Box } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer" sx={{ padding: '16px', textAlign: 'center' }}>
      <Typography variant="body1">© 2023 Radio Stream. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;