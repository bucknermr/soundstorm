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
      this.props.hideMidal();
    }
  }

  render () {
    const { email, name, password } = this.state;
    const { formType } = this.props;
    const submitValue = formType === 'signin' ? 'Sign In' : 'Create Account';

    return (
      <div
        className="session-modal"

        >
        <form className="session-form" onSubmit={this.handleSubmit} >
          <label>Email:
            <input
              onChange={this.handleChange('email')}
              type='text'
              value={email}
              placeholder='email'
            />
          </label>
          <label>Band or Artist Name:
            <input
              onChange={this.handleChange('name')}
              type='text'
              value={name}
              placeholder='Band or Artist Name'
            />
          </label>
          <label>Password:
            <input
              onChange={this.handleChange('password')}
              type='password'
              value={password}
              placeholder='Password'
            />
          </label>
          <button type="submit">{submitValue}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
