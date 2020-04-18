import * as React from 'react';
import './MusicPlayer.scss';
import { useMusicAppContext } from '../../context/MusicAppContext';

export const MusicPlayer: React.FC = () => {
  // const [audioSource, setsource] = useState(
  //   "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  // );
  const audioRef: any = React.useRef();

  const { selectedSong } = useMusicAppContext();
  const playAudio = () => {
    audioRef.current.play();
  };
  const pauseAudio = () => {
    audioRef.current.pause();
  };

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
        <div>Music Player</div>
        <i
          className="fa fa-chevron-left app-item"
          onClick={() => {
            console.log('clicked to pause');

            pauseAudio();
          }}
        />
        <i
          className="fa fa-play app-item"
          onClick={() => {
            console.log('clicked to play');
            playAudio();
          }}
        />
        <i className="fa fa-chevron-right app-item" />
      </div>
      <div>
        <audio
          className="audio-element"
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        >
          {/* <source src={audioSource} /> */}
        </audio>
      </div>
    </>
  );
};
