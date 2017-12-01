import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import CommentIndexItem from './comment_index_item';

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(
  null,
  mapDispatchToProps
)(CommentIndexItem);
