import React from 'react';

class TrackDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      track: { title: '', description: '', imageUrl: '' }
    };
  }

  componentDidMount() {
    this.props.requestTrack(this.props.match.params.trackId);
  }

  componentWillReceiveProps({ track, match }) {
    if (track) {
      this.setState({ track });
    } else {
      this.props.requestTrack(match.params.trackId);
    }
  }

  render () {
    const { track } = this.state;
    const { playTrack } = this.props;

    return (
      <div>
        <h1> this is a track </h1>
        <img src={track.imageUrl} ></img>
        <ul>
          <li>Title: {track.title}</li>
          <li>Description: {track.description}</li>
        </ul>
        <button onClick={() => playTrack(track)}>
          Play!
        </button>
      </div>
    );
  }
}

export default TrackDetail;
