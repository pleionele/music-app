import * as React from 'react';
import { useMusicAppContext } from '../../context/MusicAppContext';
import { AlbumsPage } from '../albums-page/AlbumsPage';
import { AlbumInfoPage } from '../album-info-page/AlbumInfoPage';

export const MusicAppContainer: React.FC = () => {
  const { albums, selectedAlbum } = useMusicAppContext();

  return (
    <>
      <div>{albums && !!!selectedAlbum && <AlbumsPage />}</div>
      <div>{!!selectedAlbum && <AlbumInfoPage />}</div>
    </>
  );
};
