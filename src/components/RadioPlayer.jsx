import { useRef, useState, useEffect, useCallback } from 'react';
import { PlayArrow, Stop, VolumeUp, Equalizer } from '@mui/icons-material';
import { IconButton, Typography, Slider, Paper } from '@mui/material';
import './RadioPlayer.css';

// Genre-specific album art collection (moved outside component to avoid dependency issues)
const GENRE_ALBUM_ART = {
  salsa: [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop'
  ],
  reggaeton: [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1429514513361-8fa32282fd5e?w=300&h=300&fit=crop'
  ],
  bachata: [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop'
  ],
  merengue: [
    'https://images.unsplash.com/photo-1507676184371-d788f72bb1b8?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop'
  ],
  cumbia: [
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop'
  ],
  ranchera: [
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1507676184371-d788f72bb1b8?w=300&h=300&fit=crop'
  ],
  baladas: [
    'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
  ],
  rock: [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1429514513361-8fa32282fd5e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop'
  ],
  pop: [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop'
  ],
  tropical: [
    'https://images.unsplash.com/photo-1507676184371-d788f72bb1b8?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
  ],
  general: [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop'
  ]
};

const RadioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [albumArt, setAlbumArt] = useState('');

  // Get random album art from any genre
  const getRandomAlbumArt = useCallback(() => {
    const allImages = Object.values(GENRE_ALBUM_ART).flat();
    return allImages[Math.floor(Math.random() * allImages.length)];
  }, []);

  // Update album art only
  const updateAlbumArt = useCallback(() => {
    const newAlbumArt = getRandomAlbumArt();
    setAlbumArt(newAlbumArt);
  }, [getRandomAlbumArt]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Initialize with random album art
  useEffect(() => {
    updateAlbumArt();
    
    // Change album art every 15 seconds when playing (for visual variety)
    let artChangeInterval;
    if (isPlaying) {
      artChangeInterval = setInterval(() => {
        updateAlbumArt();
      }, 15000); // 15 seconds
    }
    
    return () => {
      if (artChangeInterval) {
        clearInterval(artChangeInterval);
      }
    };
  }, [isPlaying, updateAlbumArt]);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
    // Update album art when starting to play
    updateAlbumArt();
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setAlbumArt(GENRE_ALBUM_ART.general[0]);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div className="radio-player">
      <Paper elevation={6} className="player-container">
        <div className="player-header">
          <Typography variant="h5" className="station-name">
            Infinity Radio
          </Typography>
          <Typography variant="subtitle1" className="frequency">
            Radio Online
          </Typography>
        </div>
        
        <div className="player-display">
          <div className="album-art-container">
            <img 
              src={albumArt || GENRE_ALBUM_ART.general[0]} 
              alt="Album artwork" 
              className={`album-art ${isPlaying ? 'spinning' : ''}`}
            />
            <div className="live-indicator">
              <Equalizer className="equalizer-icon" />
              <span>EN VIVO</span>
            </div>
          </div>
          
          <div className="track-info">
            <Typography variant="h6" className="now-playing">
              En Vivo desde Chitré
            </Typography>
            <Typography variant="h4" className="song-title">
              Infinity Radio Panamá
            </Typography>
            <Typography variant="subtitle1" className="artist-name">
              Radio Online - Programa &quot;Música de Ayer&quot;
            </Typography>
            <Typography variant="body2" className="station-description" sx={{ 
              marginTop: 1, 
              color: '#cbd5e1',
              fontStyle: 'italic',
              fontSize: '0.9rem'
            }}>
              Transmitiendo desde Chitré las mejores melodías de antaño
            </Typography>
          </div>
        </div>

        <div className="player-controls">
          <div className="main-controls">
            <IconButton 
              onClick={handlePlay} 
              disabled={isPlaying}
              className="play-button"
              size="large"
            >
              <PlayArrow />
            </IconButton>
            <IconButton 
              onClick={handleStop} 
              disabled={!isPlaying}
              className="stop-button"
              size="large"
            >
              <Stop />
            </IconButton>
          </div>

          <div className="volume-control">
            <VolumeUp className="volume-icon" />
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              aria-labelledby="volume-slider"
              className="volume-slider"
              min={0}
              max={100}
            />
            <Typography variant="body2" className="volume-text">
              {volume}%
            </Typography>
          </div>
        </div>

        <audio ref={audioRef} preload="none">
          <source src="https://s2.mexside.net/8048/stream" type="audio/mpeg" />
          Tu navegador no soporta la reproducción de audio.
        </audio>
      </Paper>
    </div>
  );
};

export default RadioPlayer;