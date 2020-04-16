import * as React from 'react';
import { getMusicAlbums } from '../api/mocked-api-data/get-music-albums';
import { MusicAppProvider } from '../context/MusicAppContext';
import { AlbumPage } from './AlbumsPage';

interface AppState {
  albums: any;
}
export default class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      albums: undefined
    };
  }

  async componentDidMount() {
    const results = await getMusicAlbums();
    this.setState({ albums: results.albums });
  }

  public render() {
    const { albums } = this.state;
    return (
      <>
        {albums && (
          <MusicAppProvider albums={albums}>
            <div>Hello</div>
            <AlbumPage />
          </MusicAppProvider>
        )}
      </>
    );
  }
}
