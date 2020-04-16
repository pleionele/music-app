import * as React from 'react';
import { getMusicAlbums } from '../api/mocked-api-data/get-music-albums';

interface AppState {
  albums: any;
}
export default class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      albums: []
    };
  }

  async componentDidMount() {
    const results = await getMusicAlbums();
    this.setState({ albums: results });
    console.log(results);
  }
  public render() {
    return <div>Hello</div>;
  }
}
