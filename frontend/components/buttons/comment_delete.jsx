import React from 'react';

class CommentDelete extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selected: false };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleDelete(e) {
    this.props.deleteComment(this.props.commentId);
  }

  handleClickOutside(e) {
    if (!this.dropdown.contains(e.target)) {
      document.removeEventListener('click', this.handleClickOutside);
      this.setState({ selected: false });
    }
  }

  handleClick(e) {
    document.addEventListener('click', this.handleClickOutside);
    this.toggle();
  }

  toggle() {
    if (this.state.selected) {
      document.removeEventListener('click', this.handleClickOutside);
    }
    this.setState({ selected: !this.state.selected });
  }

  deleteDropdown() {
    return (
      <div
        className="comment-delete-dropdown"
        ref={dropdown => { this.dropdown = dropdown; }}>
        <p>Do you really want to remove this comment?</p>
        <button
          className="cancel-button"
          onClick={this.toggle}>
          Cancel
        </button>
        <button
          className="yes-button"
          onClick={this.handleDelete}>
          Yes
        </button>
      </div>
    );
  }

  deleteButton () {
    return (
      <button
        className="comment-trash-button"
        ref={trash => { this.trash = trash; }}
        onClick={this.handleClick}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    );
  }

  render () {
    return (
      <div className={`comment-delete-container ${
        this.state.selected ? 'selected' : ''
      }`}>
        { this.deleteButton() }
        { this.state.selected ? this.deleteDropdown() : null }
      </div>
    );
  }
}

export default CommentDelete;
