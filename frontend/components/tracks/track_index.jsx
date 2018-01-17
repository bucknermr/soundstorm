import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillReceiveProps({ loading }) {
    if (loading !== this.state.loading) {
      this.setState({ loading });
    }
  }

  render() {
    const { tracks, artists } = this.props;
    if (this.state.loading) {
      return (
        <div className="track-index">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw loading"></i>
        </div>
      )
    }
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
  }
}

export default TrackIndex;
