import React from 'react';
import { Link } from 'react-router-dom';

import PlayPauseContainer from '../buttons/play_pause_container';

const SplashIndexItem = ({ track, artist }) => {
  let imageUrl = track.imageUrl;
  if (imageUrl === '/images/original/missing.png') {
    imageUrl = artist.imageUrl;
  }
  const title = track.title.slice(0, 20);
  const name = artist.name.slice(0, 20);

  return (
    <div className="splash-index-item">
      <div>
        <img src={imageUrl}/>
        <PlayPauseContainer track={track} />
      </div>
      <Link to={`/tracks/${track.id}`} className='title-link'>
        {title}
      </Link>
      <Link to={`/artists/${artist.id}`} className='artist-link'>
        {name}
      </Link>
    </div>
  );
};

export default SplashIndexItem;
