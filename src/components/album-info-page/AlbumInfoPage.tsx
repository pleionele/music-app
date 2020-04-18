import * as React from 'react';
import { TrackItem } from './TrackItem';
import './AlbumInfoPage.scss';
import { Track } from '../../domain/Album';
import { useMusicAppContext } from '../../context/MusicAppContext';
import { MusicPlayer } from '../music-player/MusicPlayer';

export const AlbumInfoPage: React.FC<any> = () => {
  const {
    selectedAlbum,
    selectAlbum,
    selectStong,
    selectView
  } = useMusicAppContext();
  // set the view
  React.useEffect(() => {
    selectView('tracksList');
  }, []);

  const goBackHandler = () => {
    selectAlbum(undefined);
    selectStong();
  };
  return (
    <div>
      <header
        className="section header__container"
        data-testid="album-info-page"
      >
        <h1 className="header">Album Info</h1>
      </header>
      <div className="goBack">
        <a data-testid="goBackButton" onClick={goBackHandler}>
          <strong>{'<  '}</strong>
          <strong>{'Go back'}</strong>
        </a>
      </div>
      <div className={'track__container'}>
        {selectedAlbum && <img src={selectedAlbum.image.url} />}
        <div>
          {selectedAlbum &&
            selectedAlbum.tracks.map((track, index) => (
              <TrackItem key={index} track={track} />
            ))}
        </div>
      </div>

      <MusicPlayer />
    </div>
  );
};
