import React from 'react';

class Hero extends React.Component {

  render () {
    const { showModal } = this.props;

    return (
      <div className="hero-container">
        <h1 className="hero-logo"></h1>
        <div className="hero-buttons-container">
          <button
            className="hero-sign-in"
            onClick={() => showModal('signin')}
            >
            Sign in
          </button>
          <button
            className="hero-create-account"
            onClick={() => showModal('signup')}
            >
            Create account
          </button>
        </div>
        <div className="hero-content-container">
          <h2 className="wtf">Connect on SoundCloud</h2>
          <p>
            Discover, stream, and share a constantly expanding mix of music
            from emerging and major artists around the world.
          </p>
          <button>Sign up for free</button>
        </div>
      </div>
    );
  }
}


export default Hero;
