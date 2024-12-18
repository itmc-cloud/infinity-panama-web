import React, { useRef, useState } from 'react';
import './RadioPlayer.css';

const RadioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="radio-player">
      <div className="player">
        <div className="info-wrapper">
          <img src="https://via.placeholder.com/190" alt="Album Art" />
          <div className="info">
            <h1>Now Playing</h1>
            <p>Artist - Song Title</p>
          </div>
        </div>
        <div className="controls">
          <audio ref={audioRef} style={{ display: 'none' }}>
            <source src="https://s2.mexside.net/8048/stream" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <button onClick={handlePlay} disabled={isPlaying}>Play</button>
          <button onClick={handleStop} disabled={!isPlaying}>Stop</button>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;