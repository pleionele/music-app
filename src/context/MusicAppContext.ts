import createUseContext from 'constate';
import { Album } from '../domain/Album';
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
}
const MusicAppContextHook = ({ albums }: MusicAppProps): MusicApp => {
  console.log('CONTEXT', albums);
  const [selectedView, selectView] = useState('albums');
  const [selectedAlbum, selectAlbum] = useState();
  return { selectedView, selectView, selectedAlbum, selectAlbum, albums };
};

export const useMusicAppContext = createUseContext(MusicAppContextHook);

export const MusicAppProvider = useMusicAppContext.Provider;
