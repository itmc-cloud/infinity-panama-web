import { Typography, Box, Container } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <Box className="header-background" sx={{ padding: '32px 0', textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" className="header-title" sx={{ 
          fontWeight: 'bold', 
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          marginBottom: 2
        }}>
          Infinity Radio Panamá
        </Typography>
        <Typography variant="h5" className="header-subtitle" sx={{ 
          color: '#f0f0f0',
          fontWeight: 300,
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          Programa &quot;Música de Ayer&quot; desde Chitré
        </Typography>
        <Box className="frequency-display" sx={{ 
          marginTop: 3, 
          padding: '8px 16px', 
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '25px',
          display: 'inline-block'
        }}>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Radio Online • En Vivo 24/7
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;