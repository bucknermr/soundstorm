import React from 'react';

// const PlayPause = ({ paused, playingId, track, pause, play}) => {
//   if (playingId === track.id && !paused) {
//     return (
//       <div className="pause-button"
//         onClick={() => pause(track)}></div>
//     );
//   } else {
//     return (
//       <div className="play-button"
//         onClick={() => play(track)}></div>
//     );
//   }
// };

class PlayPause extends React.Component {

  render() {
    const { paused, playingId, track, pause, play } = this.props;

    if (playingId === track.id && !paused) {
      return (
        <div className="pause-button"
          onClick={() => pause(track)}></div>
      );
    } else {
      return (
        <div className="play-button"
          onClick={() => play(track)}></div>
      );
    }
  }
}



export default PlayPause;
