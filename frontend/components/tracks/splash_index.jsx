import React from 'react';
import SplashIndexItem from './splash_index_item';

class SplashIndex extends React.Component {

  componentDidMount() {
    this.props.getTopTracks();
  }

  render() {
    const { tracks, artists } = this.props;
    return (
      <div className="splash-index">
        {
          tracks.map(track => (
            <SplashIndexItem
              key={track.id}
              track={track}
              artist={artists[track.artistId]}
            />
          ))
        }
      </div>
    );
  }
}

export default SplashIndex;
