import * as React from 'react';
import { useMusicAppContext } from '../context/MusicAppContext';

export const AlbumPage: React.FC<any> = () => {
  const { albums } = useMusicAppContext();
  const newElements = albums.map((album, index) => (
    <div key={index}>
      <div>Title:{album.name}</div>
      <img src={album.image.url} width={120} alt="" />
    </div>
  ));
  return <div>{newElements}</div>;
};
