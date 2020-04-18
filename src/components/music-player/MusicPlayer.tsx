import * as React from 'react';
import './MusicPlayer.scss';
import { useMusicAppContext } from '../../context/MusicAppContext';

export const MusicPlayer: React.FC = () => {
  const [currentTime, setcurrentTime] = React.useState(0);
  const audioRef: any = React.useRef();
  const progressBarRef: any = React.useRef();
  const { selectedSong, selectStong, allTracks } = useMusicAppContext();

  const progressBarHandler = (e: any) => {
    const newValue = (e.target.currentTime / e.target.duration) * 100;
    !isNaN(newValue) && setcurrentTime(newValue);
  };

  const playAudio = () => {
    // if no selected song then we nee to initialise our playlist first
    if (!selectedSong) {
      selectStong(allTracks[0]);
    }
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };
  const nextSong = () => {
    const maxLength = allTracks.length - 1;
    //@ts-ignore
    let key = selectedSong && selectedSong.key + 1;
    if (!key || key > maxLength) key = maxLength;
    console.log('THE NEXT KEY IS', key);
    selectStong(allTracks[key]);
  };

  const previousSong = () => {
    //@ts-ignore
    let key = selectedSong && selectedSong.key - 1;
    if (!key || key < 0) key = 0;
    console.log('THE PREVIOUS KEY IS', key);

    selectStong(allTracks[key]);
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
          <i className="fa fa-chevron-left app-item" onClick={previousSong} />
          <i className="fa fa-play app-item" onClick={playAudio} />
          <i className="fa fa-pause app-item" onClick={pauseAudio} />
          <i className="fa fa-chevron-right app-item" onClick={nextSong} />
          <audio
            autoPlay={false}
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
