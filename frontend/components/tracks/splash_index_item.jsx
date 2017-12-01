import React from 'react';
import { Link } from 'react-router-dom';

import PlayPauseContainer from '../buttons/play_pause_container';


class SplashIndexItem extends React.Component {
  constructor(props) {
    super(props);
    const isPlaying = props.playingId === props.track.id && props.playing;
    this.state = { hover: false, isPlaying };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hover: true });
  }

  handleMouseLeave() {
    this.setState({ hover: false });
  }

  componentWillReceiveProps ({ playingId, playing, track }) {
    const isPlaying = playingId === track.id && playing;
    this.setState({ isPlaying });
  }

  render() {
    const { track, artist } = this.props;
    let imageUrl = track.imageUrl;
    if (imageUrl === '/images/original/missing.png') {
      imageUrl = artist.imageUrl;
    }
    return (
      <div className="splash-index-item"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <div>
          <Link to={`/tracks/${track.id}`} className='image-link'>
            <img src={imageUrl}/>
          </Link>
          {
            this.state.hover || this.state.isPlaying ? (
              <PlayPauseContainer track={track} /> ) : null
          }
        </div>
        <Link to={`/tracks/${track.id}`} className='title-link'>
          {track.title}
        </Link>
        <Link to={`/artists/${artist.id}`} className='artist-link'>
          {artist.name}
        </Link>
      </div>
    );
  }
}

export default SplashIndexItem;
