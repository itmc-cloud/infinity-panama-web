import { Typography, Box, Container, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube, Phone, Email, LocationOn } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer" sx={{
      color: '#e0d5c0',
      padding: '40px 0 20px 0',
      marginTop: 'auto'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="footer-title" sx={{ 
              color: '#c8941a', 
              fontWeight: 'bold',
              marginBottom: 2
            }}>
              Infinity Radio Panamá
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2, lineHeight: 1.6 }}>
              Radio online desde Chitré con el programa &quot;Música de Ayer&quot;. Las mejores melodías de antaño, 24 horas al día.
            </Typography>
            <Typography variant="h6" sx={{ color: '#d4a830', fontWeight: 'bold' }}>
              Radio Online
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-section-title" sx={{ 
              color: '#c8941a',
              marginBottom: 2,
              fontWeight: 'bold'
            }}>
              Contacto
            </Typography>
            <Box className="contact-info">
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                <Phone sx={{ marginRight: 1, color: '#d4a830' }} />
                  <Typography variant="body2">+507 63247541</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                <Email sx={{ marginRight: 1, color: '#d4a830' }} />
                <Typography variant="body2">infinityradio@chitremusica.pa</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ marginRight: 1, color: '#d4a830' }} />
                <Typography variant="body2">Chitré, Herrera, Panamá</Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-section-title" sx={{ 
              color: '#c8941a',
              marginBottom: 2,
              fontWeight: 'bold'
            }}>
              Síguenos
            </Typography>
            <Box className="social-links">
              <IconButton className="social-button facebook">
                <Facebook />
              </IconButton>
              <IconButton className="social-button instagram">
                <Instagram />
              </IconButton>
              <IconButton className="social-button twitter">
                <Twitter />
              </IconButton>
              <IconButton className="social-button youtube">
                <YouTube />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ marginTop: 2, fontStyle: 'italic' }}>
              Conecta con las melodías de ayer
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ 
          borderTop: '1px solid rgba(200, 148, 26, 0.25)',
          marginTop: 4,
          paddingTop: 3,
          textAlign: 'center'
        }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2025 Infinity Radio Panamá - Programa &quot;Música de Ayer&quot;. Todos los derechos reservados.
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.6, display: 'block', marginTop: 1 }}>
            Transmitiendo desde Chitré con ❤️ las mejores melodías de antaño
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;