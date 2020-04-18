import * as React from 'react';
import { useMusicAppContext } from '../../context/MusicAppContext';
import { Track } from '../../domain/Album';

interface TrackItemProps {
  track: Track;
}

export const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  const { selectStong } = useMusicAppContext();
  return (
    <div
      key={track.id}
      className={'track item'}
      onClick={() => selectStong(track)}
    >
      <i className="fa fa-music track__icon" />
      <strong>{track.name}</strong>
      {/* <img src={track.image.url} /> */}
    </div>
  );
};
