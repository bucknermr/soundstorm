import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <form>
        <img
          className="user-icon"
          src={this.props.currentUser.imageUrl}
        />
        <input
          className="comment-input"
          type="text"
          placehodler="Write a comment"
          value={this.state.body}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
