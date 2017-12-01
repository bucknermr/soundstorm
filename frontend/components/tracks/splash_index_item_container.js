import { connect } from 'react-redux';
import SplashIndexItem from './splash_index_item';

const mapStateToProps = ({ ui }) => ({
  playingId: ui.audio.trackId,
  playing: !ui.audio.paused
});


export default connect(
  mapStateToProps,
  null
)(SplashIndexItem);
