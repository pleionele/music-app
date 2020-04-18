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
}
const MusicAppContextHook = ({ albums }: MusicAppProps): MusicApp => {
  const [selectedView, selectView] = useState('albums');
  const [selectedAlbum, selectAlbum] = useState();
  const [selectedSong, selectStong] = useState();

  return {
    selectedView,
    selectView,
    selectedAlbum,
    selectAlbum,
    albums,
    selectStong,
    selectedSong
  };
};

export const useMusicAppContext = createUseContext(MusicAppContextHook);

export const MusicAppProvider = useMusicAppContext.Provider;
