import * as React from 'react';
import './MusicPlayer.scss';
import { useMusicAppContext } from '../../context/MusicAppContext';

export const MusicPlayer: React.FC = () => {
  const [currentTime, setcurrentTime] = React.useState(0);

  const progressBarHandler = (e: any) => {
    const newValue = (e.target.currentTime / e.target.duration) * 100;
    !isNaN(newValue) && setcurrentTime(newValue);
  };
  const audioRef: any = React.useRef();
  const progressBarRef: any = React.useRef();

  const { selectedSong } = useMusicAppContext();
  const playAudio = () => {
    audioRef.current.play();
  };
  const pauseAudio = () => {
    audioRef.current.pause();
  };

  React.useEffect(() => {
    // start playing when a new song is selected
    const { current } = audioRef;
    (current as any).src = selectedSong && selectedSong.href;
    // initialise the progressBar
    setcurrentTime(0);
    playAudio();
  }, [selectedSong]);

  return (
    <>
      <div className={'musicplayer__container'}>
        <div className={'musicplayer__title'}>
          {(selectedSong && selectedSong.name) || 'Choose to play a song'}
        </div>
        <div className={'musicplayer__controls'}>
          <i
            className="fa fa-chevron-left app-item"
            onClick={() => {
              console.log('clicked left');
            }}
          />
          <i
            className="fa fa-play app-item"
            onClick={() => {
              console.log('clicked to play');
              playAudio();
            }}
          />
          <i
            className="fa fa-pause app-item"
            onClick={() => {
              console.log('clicked to pause');
              pauseAudio();
            }}
          />
          <i className="fa fa-chevron-right app-item" />
          <audio
            onTimeUpdate={progressBarHandler}
            className="audio-element"
            ref={audioRef}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          />
          <progress
            ref={progressBarRef}
            value={currentTime}
            max={100}
            className={'musicplayer__bar'}
          />
        </div>
      </div>
    </>
  );
};
