import * as React from 'react';
import { useMusicAppContext } from '../../context/MusicAppContext';
import { Album } from '../../domain/Album';

interface AlbumItemProps {
  album: Album;
}

export const AlbumItem: React.FC<AlbumItemProps> = ({ album }) => {
  const { selectAlbum } = useMusicAppContext();
  return (
    <div
      key={album.id}
      className={'album-item'}
      onClick={() => selectAlbum(album)}
    >
      <div className={'details'}>
        <div>
          Album: <strong>{album.name}</strong>
        </div>
        <div>
          Name: <strong>{album.artist.name}</strong>
        </div>
      </div>
      <img src={album.image.url} />
    </div>
  );
};
