import React from 'react';
import SplashIndexItemContainer from './splash_index_item_container';

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
            <SplashIndexItemContainer
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
