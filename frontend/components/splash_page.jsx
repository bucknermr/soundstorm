import React from 'react';
import SplashIndexContainer from './tracks/splash_index_container';
import HeroContainer from './header/hero_container';
class SplashPage extends React.Component {


  render() {
    return (
      <div>
        <HeroContainer />
        <SplashIndexContainer />
      </div>
    );
  }
}

export default SplashPage;
