import fetchMock from 'fetch-mock';
import { mockedApiData } from './mocked-api-data/apiData';

fetchMock.get('http://musicApi/albums', mockedApiData, {
  headers: {
    user: 'me'
  }
});

export function getMusicAlbums() {
  return fetch('http://musicApi/albums', {
    headers: {
      user: 'me'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}
