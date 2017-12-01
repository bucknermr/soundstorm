import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import CommentDelete from './comment_delete';

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(
  null,
  mapDispatchToProps
)(CommentDelete);
