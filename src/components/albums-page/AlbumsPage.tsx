import * as React from 'react';
import { useMusicAppContext } from '../../context/MusicAppContext';
import './AlbumsPage.scss';
import { Album } from '../../domain/Album';
import { AlbumItem } from '../album/Album';
import { MusicPlayer } from '../music-player/MusicPlayer';
import { View } from '../../domain/View';

export const AlbumsPage: React.FC<any> = () => {
  const { albums, selectView } = useMusicAppContext();
  // set the view
  React.useEffect(() => {
    selectView(View.ALBUM_LIST);
  }, []);

  return (
    <div>
      <header className="section header__container">
        <h1 className="header">Music Albums</h1>
      </header>
      <div className={'album-section'}>
        {albums.map((album: Album) => (
          <AlbumItem album={album} key={album.id} />
        ))}
      </div>
      <MusicPlayer />
    </div>
  );
};
