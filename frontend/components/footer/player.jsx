import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);


  }

  render () {

    const { track } = this.props.audio;
    if (!track) { return null; }

    return (
      <audio src={track.audioUrl} autoPlay controls ></audio>
    );
  }
}

export default Player;
