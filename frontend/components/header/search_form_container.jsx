import { connect } from 'react-redux';
import { searchTracks } from '../../actions/track_actions';
import SearchForm from './search_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentArtist)
})

const mapDispatchToProps = dispatch => ({
  searchTracks: term => dispatch(searchTracks(term))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
