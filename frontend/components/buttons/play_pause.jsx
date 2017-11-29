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

  // constructor(props) {
  //   super(props);
  //   this.state = { paused: }
  // }

  // handlePlay() {
  //   this.setState({ paused: false })
  // };
  // handlePause() {
  //   this.setState({ paused: true })
  // };

  // componentDidMount() {
  //   const audio = document.querySelector('.react-audio-player');
  //   audio.addEventListener('play', this.handlePlay);
  //   audio.addEventListener('pause', this.handlePause);
  // }

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
