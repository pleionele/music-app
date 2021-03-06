import * as React from 'react';
import './App.scss';
import { getMusicAlbums } from '../../api/get-music-albums';
import { MusicAppProvider } from '../../context/MusicAppContext';
import { MusicAppContainer } from './MusicAppContainer';

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
      <div className={'page'}>
        <MusicAppProvider albums={albums}>
          <MusicAppContainer />
        </MusicAppProvider>
      </div>
    );
  }
}
