import React from 'react';
import Player from '../audio/player';

class PlayPause extends React.Component {

  constructor(props) {
    super(props);

    this.audioEl = document.querySelector('audio');

    const subscribed = this.props.playingId === this.props.track.id;
    const paused = this.audioEl.paused;

    this.state = { paused, subscribed };

    this.playTrack = this.playTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.handlePlayed = this.handlePlayed.bind(this);
    this.handlePaused = this.handlePaused.bind(this);
  }

  playTrack() {
    this.props.play(this.props.track);
  }

  pauseTrack() {
    this.props.pause(this.props.track);
  }

  handlePlayed() {
    if (this.state.subscribed) {
      this.setState({ paused: false });
    }
  }

  handlePaused() {
    if (this.state.subscribed) {
      this.setState({ paused: true });
    }
  }

  componentDidMount() {
    this.audioEl.addEventListener('play', this.handlePlayed);
    this.audioEl.addEventListener('pause', this.handlePaused);
  }

  componentWillReceiveProps(newProps) {
    const shouldSubscribe = newProps.playingId === this.props.track.id;
    if (shouldSubscribe && !this.state.subscribed) {
      this.setState({ subscribed: true });
    } else if (!shouldSubscribe && this.state.subscribed){
       this.setState({ subscribed: false, paused: true });
    }
  }

  componentWillUnmount() {
    this.audioEl.removeEventListener('play', this.handlePlayed);
    this.audioEl.removeEventListener('pause', this.handlePaused);
  }

  render() {
    if (!this.state.paused && this.state.subscribed) {
      return (
        <div className="pause-button"
          onClick={this.pauseTrack}></div>
        );
    } else {
      return (
        <div className="play-button"
          onClick={this.playTrack}></div>
        );
    }
  }
}

export default PlayPause;
