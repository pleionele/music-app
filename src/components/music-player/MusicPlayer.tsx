import * as React from 'react';
import './MusicPlayer.scss';
import { useMusicAppContext } from '../../context/MusicAppContext';
import { View } from '../../domain/View';

export const MusicPlayer: React.FC = () => {
  const [currentTime, setcurrentTime] = React.useState(0);
  const audioRef: any = React.useRef();
  const progressBarRef: any = React.useRef();
  const {
    selectedSong,
    selectStong,
    allTracks,
    selectedView
  } = useMusicAppContext();

  const progressBarHandler = (e: any) => {
    const newValue = (e.target.currentTime / e.target.duration) * 100;
    !isNaN(newValue) && setcurrentTime(newValue);
  };

  const playSong = () => {
    // if no selected song we are on the main page
    if (selectedView === View.ALBUM_LIST && !selectedSong) {
      selectStong(allTracks[0]);
    }
    audioRef.current.play();
  };

  const pauseSong = () => {
    audioRef.current.pause();
  };
  const nextSong = () => {
    //@ts-ignore
    let key = selectedSong && selectedSong.key + 1;
    if (!key) key = 0;
    console.log('THE NEXT KEY IS', key);
    selectStong(allTracks[key]);
  };

  const previousSong = () => {
    //@ts-ignore
    let key = selectedSong && selectedSong.key - 1;
    if (!key) key = 0;
    console.log('THE PREVIOUS KEY IS', key);

    selectStong(allTracks[key]);
  };

  React.useEffect(() => {
    // start playing when a new song is selected
    const { current } = audioRef;
    (current as any).src = selectedSong && selectedSong.href;
    // initialise the progressBar
    setcurrentTime(0);
    console.log('I WILL START PLAYING');
    playSong();
  }, [selectedSong]);

  return (
    <>
      <div className={'musicplayer__container'}>
        <div className={'musicplayer__title'}>
          {(selectedSong && selectedSong.name) || 'Choose to play a song'}
        </div>
        <div className={'musicplayer__controls'}>
          <i className="fa fa-chevron-left app-item" onClick={previousSong} />
          <i className="fa fa-play app-item" onClick={playSong} />
          <i className="fa fa-pause app-item" onClick={pauseSong} />
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
