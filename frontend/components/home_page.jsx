import React from 'react';
import SplashIndexContainer from './tracks/splash_index_container';
import HeroContainer from './header/hero_container';
import SearchFormContainer from './header/search_form_container';

class HomePage extends React.Component {
  render() {
    return (
      <div className="main-content-container home-page splash-page">
        <h2 className="splash-index-header">Check out the current top tracks!</h2>
        <SplashIndexContainer />
      </div>
    );
  }
}

export default HomePage;
