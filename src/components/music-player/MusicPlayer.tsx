import * as React from 'react';
import './MusicPlayer.scss';
import { useMusicAppContext } from '../../context/MusicAppContext';

export const MusicPlayer: React.FC = () => {
  // const [audioSource, setsource] = useState(
  //   "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  // );

  const [currentDuration, setCurrentDuration] = React.useState(0);

  const audioRef: any = React.useRef();
  const progressBarRef: any = React.useRef();

  const { selectedSong } = useMusicAppContext();
  const playAudio = () => {
    audioRef.current.play();
  };
  const pauseAudio = () => {
    console.log('duration:', audioRef.current.duration);

    console.log('current time:', audioRef.current.currentTime);
    audioRef.current.pause();
  };
  React.useEffect(() => {
    console.log(currentDuration, 'HERE');
  }, [currentDuration]);
  React.useEffect(() => {
    const { current } = audioRef;
    // console.log("CURRENT", (current as any).src);
    (current as any).src = selectedSong && selectedSong.href;
    current.play();
    // selectedSong && setsource(selectedSong.href);
  }, [selectedSong]);

  return (
    <>
      <div className={'musicplayer__container'}>
        <div>{selectedSong && selectedSong.name}</div>
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
      </div>
      <div>
        <audio
          // onTimeUpdate={() => {
          //   const value =
          //     (audioRef.current.currentTime * 100) /
          //     audioRef.current.currentDuration;
          //   console.log(
          //     "aaaaa",
          //     audioRef.current.currentTime,
          //     audioRef.current.duration
          //   );
          //   setCurrentDuration(value);
          //   progressBarRef.current.value = value;
          // }}
          className="audio-element"
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        >
          {/* <source src={audioSource} /> */}
        </audio>
        <progress ref={progressBarRef} />
      </div>
    </>
  );
};
