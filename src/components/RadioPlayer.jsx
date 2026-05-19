import { useRef, useState } from 'react';
import { PlayArrow, Stop, VolumeUp } from '@mui/icons-material';
import { IconButton, Typography, Slider, Paper } from '@mui/material';
import './RadioPlayer.css';

const RadioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleVolumeChange = (_, newValue) => {
    setVolume(newValue);
    if (audioRef.current) audioRef.current.volume = newValue / 100;
  };

  return (
    <div className="radio-player">
      <Paper elevation={0} className="player-container">

        {/* Top gold divider */}
        <div className="gold-divider" />

        {/* Live indicator row */}
        <div className="live-row">
          <span className={`live-dot ${isPlaying ? 'live-dot--on' : ''}`} />
          <Typography className="live-text">
            EN VIVO DESDE EL CORAZÓN DE PANAMÁ
          </Typography>
        </div>

        {/* Bottom gold divider */}
        <div className="gold-divider" />

        {/* Main brand title */}
        <Typography variant="h3" className="main-title">
          InfinityPanama.Com
        </Typography>

        {/* Subtitle */}
        <Typography className="player-subtitle">
          La señal Online 24 Horas<br />
          100% música y 0% comerciales.
        </Typography>

        {/* Description */}
        <Typography className="player-description">
          Esta es la señal por internet que te presenta la mayor colección
          de canciones del recuerdo en español e inglés.
        </Typography>

        {/* Play / Stop buttons */}
        <div className="main-controls">
          <IconButton
            onClick={handlePlay}
            disabled={isPlaying}
            className="play-button"
            size="large"
          >
            <PlayArrow fontSize="large" />
          </IconButton>
          <IconButton
            onClick={handleStop}
            disabled={!isPlaying}
            className="stop-button"
            size="large"
          >
            <Stop fontSize="large" />
          </IconButton>
        </div>

        {/* Volume */}
        <div className="volume-control">
          <VolumeUp className="volume-icon" />
          <Slider
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Volume"
            className="volume-slider"
            min={0}
            max={100}
          />
          <Typography className="volume-text">{volume} %</Typography>
        </div>

        <audio ref={audioRef} preload="none">
          <source src="https://s2.mexside.net/8048/stream" type="audio/mpeg" />
        </audio>
      </Paper>
    </div>
  );
};

export default RadioPlayer;
