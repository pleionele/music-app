import * as React from 'react';
import { Track } from '../../domain/Album';

interface TrackItemProps {
  track: Track;
}

export const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  return (
    <div key={track.id} className={'album-item'}>
      <div className={'details'}>
        <div>
          Track: <strong>{track.name}</strong>
        </div>
        <div>
          Name: <strong>{track.type}</strong>
        </div>
      </div>
    </div>
  );
};
