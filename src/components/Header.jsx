import { Typography, Box, Container } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <Box className="header-background">
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" className="header-title">
          Infinity Radio Panamá
        </Typography>
        <Box className="header-badge">
          <Typography variant="h6" className="header-badge-text">
            Radio en línea
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
