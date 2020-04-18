import { Album } from '../domain/Album';

export const getAllTracks = (albums: Album[]) => {
  let newArray = [];
  for (let i = 0; i < albums.length; i++) {
    const tracks = albums[i].tracks;
    for (let y = 0; y < tracks.length; y++) {
      newArray.push(tracks[y]);
    }
  }
  return newArray;
};
