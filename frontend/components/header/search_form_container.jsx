import { connect } from 'react-redux';
import SearchForm from './search_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentArtist)
})

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
