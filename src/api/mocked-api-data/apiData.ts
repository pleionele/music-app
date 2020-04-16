import { Album } from '../../domain/Album';

export const mockedApiData: { albums: Album[] } = {
  albums: [
    {
      artist: {
        id: '53A0W3U0s8diEn9RhXQhVz',
        name: 'Keane',
        type: 'artist'
      },
      id: '41MnTivkwTO3UUJ8DrqEJJ',
      image: {
        height: 640,
        url: 'https://i.scdn.co/image/89b92c6b59131776c0cd8e5df46301ffcf36ed69',
        width: 640
      },
      name: 'The Best Of Keane (Deluxe Edition)',
      tracks: [
        {
          id: '4r9PmSmbAOOWqaGWLf6M9Q',
          name: "Everybody's Changing",
          track_number: 1,
          type: 'track'
        },
        {
          id: '0HJQD8uqX2Bq5HVdLnd3ep',
          name: 'Somewhere Only We Know',
          track_number: 2,
          type: 'track'
        }
      ]
    },

    {
      artist: {
        id: '53A0W3U0s8diEn9RhXQhVz',
        name: 'KeaneB',
        type: 'artist'
      },
      id: '41MnTivkwTO3UDDUJ8DrqEJJ',
      image: {
        height: 640,
        url: 'https://i.scdn.co/image/21e1ebcd7ebd3b679d9d5084bba1e163638b103a',
        width: 640
      },
      name: 'The Best Of KeaneB (Deluxe Edition)',
      tracks: [
        {
          id: '4r9PmSmbAOOWqaGWLf6M9Q',
          name: "Everybody's Changing",
          track_number: 1,
          type: 'track'
        },
        {
          id: '0HJQD8uqX2Bq5HVdLnd3ep',
          name: 'Somewhere Only We Know',
          track_number: 2,
          type: 'track'
        }
      ]
    },
    {
      artist: {
        id: '53A0W3U0s8diEn9RhXQhVz',
        name: 'KeaneC',
        type: 'artist'
      },
      id: '41MnTivkwTO3UUJ8DrqEJJ',
      image: {
        height: 640,
        url: 'https://i.scdn.co/image/eb6f0b2594d81f8d9dced193f3e9a3bc4318aedc',
        width: 640
      },
      name: 'The Best Of KeaneC (Deluxe Edition)',
      tracks: [
        {
          id: '4r9PmSmbAOOWqaGWLf6M9Q',
          name: "Everybody's Changing",
          track_number: 1,
          type: 'track'
        },
        {
          id: '0HJQD8uqX2Bq5HVdLnd3ep',
          name: 'Somewhere Only We Know',
          track_number: 2,
          type: 'track'
        }
      ]
    }
  ]
};
