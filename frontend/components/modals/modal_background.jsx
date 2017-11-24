import React from 'react';

class ModalBackground extends React.Component {

  handleClick(e) {
    if (e.target === e.currentTarget) {
      this.props.hideModal();
    }
  }

  render() {
    return (
      <div
        className="modal-background animated fadeIn"
        onClick={this.handleClick.bind(this)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ModalBackground;
