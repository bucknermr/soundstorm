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
    this.loginDemo = this.loginDemo.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const artist = merge({}, this.state);
    this.props.processForm(artist)
      .then(() => this.props.hideModal());
  }

  handleClick(e) {
    if (e.target === e.currentTarget) {
      this.props.hideModal();
    }
  }

  loginDemo(e) {
    e.preventDefault();

    this.setState({ email: 'email', name: 'name', password: 'password' });
    setTimeout(() => {
      this.props.login(this.state)
      .then(() => this.props.hideModal());
    }, 1500);
  }

  render () {
    const { email, name, password } = this.state;
    const { formType } = this.props;
    const submitValue = formType === 'signin' ? 'Sign In' : 'Create Account';

    return (
      <div
        className="modal-background animated fadeIn"
        onClick={this.handleClick}
        >
        <form
          className="session-form animated slideInDown"
          onSubmit={this.handleSubmit} >
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
          <button
            className="orange-button"
            onClick={this.loginDemo}
            >
            Demo
          </button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
