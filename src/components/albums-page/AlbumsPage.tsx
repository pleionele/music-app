import * as React from 'react';
import { AlbumItem } from '../album/Album';
import { Album } from '../../domain/Album';
import { useMusicAppContext } from '../../context/MusicAppContext';

export const AlbumPage: React.FC<any> = () => {
  const { albums } = useMusicAppContext();

  return (
    <div>
      <h1 className={'header-title'}>Music Albums</h1>
      {albums.map((album: Album, index: number) => (
        <AlbumItem album={album} key={index} />
      ))}
    </div>
  );
};
