import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { searchTracks } from '../../actions/track_actions';
import SearchForm from './search_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentArtist)
})

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(SearchForm)
);
