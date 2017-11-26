import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = ({ ui }) => ({
  audio: ui.audio
});

// const mapDispatchToProps =

export default connect(
  mapStateToProps,
  null
)(Player);
