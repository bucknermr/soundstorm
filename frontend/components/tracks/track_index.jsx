import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      artists: null
    };
  }

  componentDidMount() {
    if (this.props.artistId) {
      this.props.getTracks(this.props.artistId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.artistId !== this.props.artistId) {
      this.props.getTracks(newProps.artistId);
    }
  }


  render() {
    const { tracks, artists } = this.props;

    if ( tracks.length > 0 && Object.keys(artists).length > 0 ) {
      return (
        <div className="track-index">
          {
            tracks.map(track => (
              <TrackIndexItem
                key={`track-${track.id}`}
                track={track}
                artist={artists[track.artistId]}
              />
            ))
          }
        </div>
      );
    } else {
      return null;
    }

  }
}

export default TrackIndex;
