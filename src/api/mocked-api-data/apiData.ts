import { Album } from '../../domain/Album';

export const mockedApiData: { albums: Album[] } = {
  albums: [
    {
      artist: {
        id: '53A0W3U0s8diEeren9RhXQhVz',
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
          href: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          id: '4r9PmSmbAOOhtWqaGWLf6M9Q',
          name: "Everybody's Changing",
          track_number: 1,
          type: 'track'
        },
        {
          href:
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
          id: '0HJQD8uqvdaX2Bq5HVdLnd3ep',
          name: 'Somewhere Only We Know',
          track_number: 2,
          type: 'track'
        }
      ]
    },

    {
      artist: {
        id: '53A0W3U0s8eediEn9RhXQhVz',
        name: 'KeaneB',
        type: 'artist'
      },
      id: '41MnTivkwTO3UawDDUJ8DrqEJJ',
      image: {
        height: 640,
        url: 'https://i.scdn.co/image/c9976d5818a866de5607a61130c51ea1b4d59a62',
        width: 640
      },
      name: 'The Best Of KeaneB (Deluxe Edition)',
      tracks: [
        {
          href:
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
          id: '4r9PmSmbAOOWdqaGWLf6M9Q',
          name: "Everybody's Changing",
          track_number: 1,
          type: 'track'
        },
        {
          href:
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
          id: '0HJQD8uqX2Bqa5HVdLnd3ep',
          name: 'Somewhere Only We Know',
          track_number: 2,
          type: 'track'
        }
      ]
    },
    {
      artist: {
        id: '53A0W3U0s8diEn9RshXQhVz',
        name: 'KeaneC',
        type: 'artist'
      },
      id: '41MnTivkwTO3UUJ8DrqEeeJJ',
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
          type: 'track',
          href: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
        },
        {
          href: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
          id: '0HJQD8uqX2Bq5HVdLnd3ep',
          name: 'Somewhere Only We Know',
          track_number: 2,
          type: 'track'
        }
      ]
    }
  ]
};
