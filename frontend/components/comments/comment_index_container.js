import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import { commentsArray } from '../../reducers/selectors';
import CommentIndex from './comment_index';

const mapStateToProps = (state) => {
  const { currentArtist } = state.session;
  return {
    comments: commentsArray(state),
    artists: state.entities.artists,
    currentArtistId: currentArtist ? currentArtist.id : null
  };
};

export default connect(
  mapStateToProps,
  null
)(CommentIndex);
