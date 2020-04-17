import * as React from 'react';
import { useMusicAppContext } from '../../context/MusicAppContext';
import { MusicPlayer } from '../music-player/MusicPlayer';
import { TrackItem } from './TrackItem';

export const AlbumInfoPage: React.FC<any> = () => {
  const { selectedAlbum, selectAlbum } = useMusicAppContext();

  return (
    <div>
      <header
        className="section header__container"
        data-testid="album-info-page"
      >
        <h1 className="header">Album Info</h1>
      </header>
      <div className="goBack">
        <a data-testid="goBackButton" onClick={() => selectAlbum(undefined)}>
          <strong>{'<  '}</strong>
          <strong>{'Go back'}</strong>
        </a>
      </div>
      {selectedAlbum &&
        selectedAlbum.tracks.map((track, index) => (
          <TrackItem key={index} track={track} />
        ))}
      <MusicPlayer />
    </div>
  );
};
