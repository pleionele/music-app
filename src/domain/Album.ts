export interface Album {
  artist: Artist;
  id: string;
  image: any;
  tracks: Track[];
  name: string;
}

interface Artist {
  id: string;
  name: string;
  type: string;
}

export interface Track {
  id: string;
  name: string;
  track_number: number;
  type: string;
  href: string;
  key?: number;
}
