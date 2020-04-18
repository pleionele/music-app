import * as React from 'react';
import { useEffect } from 'react';
import { AlbumsPage } from '../albums-page/AlbumsPage';
import { AlbumInfoPage } from '../album-info-page/AlbumInfoPage';
import { getAllTracks } from '../../api/get-all-tracks';
import { useMusicAppContext } from '../../context/MusicAppContext';

export const MusicAppContainer: React.FC = () => {
  const {
    albums,
    selectedAlbum,
    setAllTracks,
    allTracks,
    selectStong
  } = useMusicAppContext();
  useEffect(() => {
    if (albums) {
      const alltracks = getAllTracks(albums);
      setAllTracks(alltracks);
    }
  }, [albums]);

  // initialize the music player when we have some tracks back from the api
  useEffect(() => {
    if (allTracks) {
      selectStong(allTracks[0]);
    }
  }, [allTracks]);

  return (
    <>
      <div>{albums && !!!selectedAlbum && <AlbumsPage />}</div>
      <div>{!!selectedAlbum && <AlbumInfoPage />}</div>
    </>
  );
};
