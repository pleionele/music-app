import * as React from 'react';
import { Album } from '../../domain/Album';

interface AlbumItemProps {
  key: number;
  album: Album;
}

export const AlbumItem: React.FC<AlbumItemProps> = ({ album, key }) => {
  return (
    <div key={key}>
      <div>Title:{album.name}</div>
      <img src={album.image.url} width={120} />
    </div>
  );
};
