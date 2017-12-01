import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import { showModal } from '../../actions/modal_actions';
import CommentForm from './comment_form';

const mapStateToProps = ({ session }) => ({
  currentArtist: session.currentArtist
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment, trackId) => dispatch(createComment(comment, trackId)),
  signInForm: (message) => dispatch(showModal('signin', message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
