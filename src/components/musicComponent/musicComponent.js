import React, { useState } from 'react';
import Music from "./assets/gameMusic.mp3";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.createRef();
  
    const handlePlay = () => {
        setIsPlaying(true);
        audioRef.current.play()
      };
  
    const handlePause = () => {
      setIsPlaying(false);
      audioRef.current.pause();
    };
  
    return (
      <div>
        <audio ref={audioRef} src={Music} />
        {isPlaying ? (
          <button className='mute' onClick={handlePause}></button>
        ) : (
          <button className='sound' onClick={handlePlay}></button>
        )}
      </div>
    );
  }