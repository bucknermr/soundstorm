import React from 'react';
import SplashIndexContainer from './tracks/splash_index_container';
import HeroContainer from './header/hero_container';
import SearchFormContainer from './header/search_form_container';

class SplashPage extends React.Component {
  render() {
    return (
      <div className="main-content-container splash-page">
        <HeroContainer />
        <div className="splash-search">
          <SearchFormContainer />
          <span>or</span>
          <button
            className="upload-button"
            onClick={this.props.showSignup.bind(this)}
            >Upload your own</button>
        </div>
        <h2 className="splash-index-header">Hear what’s trending for free in the SoundCloud community</h2>
        <SplashIndexContainer />
      </div>
    );
  }
}

export default SplashPage;
