import React from 'react';

const ArtistSidebar = ({ artist }) => {
  const { bio } = artist;

  return (
    <div className="sidebar-right">
      <div className="artist-stats">
        <div>
          <p>Followers</p>
          <span className="artist-stat">525</span>
        </div>
        <div>
          <p>Following</p>
          <span className="artist-stat">2,003</span>
        </div>
        <div>
          <p>Tracks</p>
          <span className="artist-stat">72</span>
        </div>
      </div>
      <p className="artist-bio">{bio}</p>
    </div>
  );
};

export default ArtistSidebar;
