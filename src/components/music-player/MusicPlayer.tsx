import * as React from 'react';

export const MusicPlayer: React.FC = () => {
  const playAudio = () => {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    (audioEl as any).play();
  };
  const pauseAudio = () => {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    (audioEl as any).pause();
  };

  return (
    <>
      <div>
        <div>Music Player</div>
        <i
          className="fa fa-chevron-left app-item"
          onClick={() => {
            console.log('clicked to play');
            playAudio();
          }}
        />
        <i
          className="fa fa-play app-item"
          onClick={() => {
            console.log('clicked to pause');
            pauseAudio();
          }}
        />
        <i className="fa fa-chevron-right app-item" />
      </div>
      <div>
        <audio className="audio-element">
          <source src="http://streaming.tdiradio.com:8000/house.mp3" />
        </audio>
      </div>
    </>
  );
};
