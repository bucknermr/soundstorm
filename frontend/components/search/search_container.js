import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { searchTracks } from '../../actions/track_actions';
import Search from './search';

const mapDispatchToProps = dispatch => ({
  searchTracks: term => dispatch(searchTracks(term))
})

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Search)
);
