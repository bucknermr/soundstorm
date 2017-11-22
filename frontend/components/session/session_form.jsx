import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    };
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    console.log("i'm trying to submit");
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  render () {
    const { email, name, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
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
        <input type='submit' value='Sign In'/>
      </form>
    );
  }
}

export default SessionForm;
