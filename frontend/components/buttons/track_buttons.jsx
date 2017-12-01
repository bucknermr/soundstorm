import React from 'react';

class TrackButtons extends React.Component {

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
    this.props.deleteTrack(this.props.track)
      .then(() => this.props.history.push('/'));
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

  moreDropdown() {
    return (
      <div
        className="more-dropdown"
        ref={dropdown => { this.dropdown = dropdown; }}>
        {/* <p>Do you really want to remove this comment?</p> */}
        <button
          className="track-edit-button"
          onClick={() => this.props.trackEditForm(this.props.track)}>
          <i className="fa fa-pencil" aria-hidden="true"></i>Edit Track
        </button>
        <button
          className="delete-button"
          onClick={this.handleDelete}>
          <i className="fa fa-trash" aria-hidden="true"></i>Delete track
        </button>
      </div>
    );
  }

  moreButton () {
    return (
      <button
        className="more-button"
        onClick={this.handleClick}>
        <span>...</span>More
      </button>
    );
  }

  render () {
    return (
      <div className={`more-container ${
        this.state.selected ? 'selected' : ''
      }`}>
        { this.moreButton() }
        { this.state.selected ? this.moreDropdown() : null }
      </div>
    );
  }
}

export default TrackButtons;
