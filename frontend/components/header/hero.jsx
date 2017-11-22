import React from 'react';

const Hero = () => (
  <div className="hero-container">
    <h1 className="hero-logo"></h1>
    <div className="hero-buttons-container">
      <button className="hero-sign-in">Sign in</button>
      <button className="hero-create-account">Create account</button>
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

export default Hero;
