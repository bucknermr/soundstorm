import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);

    // this.state = { tracks: [], artists: {} };
    this.state = { tracks: [] };
  }

  componentDidMount() {
    if (this.props.artistId) {
      this.props.getTracks(this.props.artistId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ tracks: newProps.tracks });
  }

  render() {
    // const { tracks, artists } = this.state;
    const { tracks, artist } = this.state;
    const { artists } = this.props;

    return (
      <div className="track-index">
        {
          this.state.tracks.map(track => (
            <TrackIndexItem
              key={`track-${track.id}`}
              track={track}
              artist={artists[track.artistId]}
            />
          ))
        }
      </div>
    );
  }
}

export default TrackIndex;
