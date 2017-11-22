import React from 'react';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const artist = merge({}, this.state);
    this.props.processForm(artist);
  }

  handleClick(e) {
    if (e.target === e.currentTarget) {
      this.props.hideModal();
    }
  }

  render () {
    const { email, name, password } = this.state;
    const { formType } = this.props;
    const submitValue = formType === 'signin' ? 'Sign In' : 'Create Account';

    return (
      <div
        className="session-modal"
        onClick={this.handleClick}
        >
        <form className="session-form" onSubmit={this.handleSubmit} >
          <input
            className="input-text-large"
            type='text'
            value={email}
            placeholder='Your email address *'
            onChange={this.handleChange('email')}
          />
          {
            formType === 'signup' ? (
              <input
                className="input-text-large"
                type='text'
                value={name}
                placeholder='Band, artist, or display name *'
                onChange={this.handleChange('name')}
              />
            ) : null
          }
          <input
            className="input-text-large"
            type='password'
            value={password}
            placeholder='Password *'
            onChange={this.handleChange('password')}
          />
          <button
            className="orange-button"
            type="submit"
            >
            {submitValue}
          </button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
