import * as React from 'react';
import { Track } from '../../domain/Album';

interface TrackItemProps {
  track: Track;
}

export const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  return (
    <div key={track.id} className={'track item'}>
      <i className="fa fa-music track__icon" />
      <strong>{track.name}</strong>
      {/* <img src={track.image.url} /> */}
    </div>
  );
};
