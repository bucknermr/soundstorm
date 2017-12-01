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
    if (this.state.body) {
      const { createComment, trackId } = this.props;
      createComment(this.state, trackId);
      this.setState({ body: '' });
    }
  }

  render() {
    return (
      <form
        className="comment-form"
        onSubmit={this.handleSubmit}>
        <img
          className="artist-icon"
          src={this.props.currentArtist.imageUrl}
        />
        <input
          className="comment-input"
          type="text"
          placeholder="Write a comment"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <input className="comment-submit" type="submit"/>
      </form>
    );
  }
}

export default CommentForm;
