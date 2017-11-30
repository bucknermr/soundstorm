import createComment from '../../actions/comment_actions';

const mapStateToProps = ({ session }) => ({
  currentArtist: session.currentArtist
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment, trackId) => dispatch(createComment(comment, trackId))
});
