import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createComment, trackId } = this.props;
    createComment(this.state, trackId);
  }

  render() {
    return (
      <form on >
        <img
          className="artist-icon"
          src={this.props.currentArtist.imageUrl}
        />
        <input
          className="comment-input"
          type="text"
          placehodler="Write a comment"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <input type="submit" style="display: none"/>
      </form>
    );
  }
}

export default CommentForm;
