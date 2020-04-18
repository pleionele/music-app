import createUseContext from 'constate';
import { Album, Track } from '../domain/Album';
import { useState } from 'react';

interface MusicAppProps {
  albums: Album[];
}

interface MusicApp {
  albums: Album[];
  selectView: Function;
  selectedView: string;
  selectedAlbum?: Album;
  selectAlbum: Function;
  selectedSong?: Track;
  selectStong: Function;
  setAllTracks: Function;
  allTracks: Track[];
}
const MusicAppContextHook = ({ albums }: MusicAppProps): MusicApp => {
  const [selectedView, selectView] = useState('albums');
  const [selectedAlbum, selectAlbum] = useState();
  const [selectedSong, selectStong] = useState();
  const [allTracks, setAllTracks] = useState([]);

  return {
    selectedView,
    selectView,
    selectedAlbum,
    selectAlbum,
    albums,
    selectStong,
    selectedSong,
    allTracks,
    setAllTracks
  };
};

export const useMusicAppContext = createUseContext(MusicAppContextHook);

export const MusicAppProvider = useMusicAppContext.Provider;
