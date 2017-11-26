import React from 'react';
import NavbarContainer from './header/navbar_container';
import HeroContainer from './header/hero_container';
import ModalRootContainer from './modals/modal_root_container';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router';

import TrackDetailContainer from './tracks/track_detail_container';
import PlayerContainer from './footer/player_container';

const App = () => {
  return (
    <div>
      <header>
        <Switch>
          <AuthRoute exact path='/' component={HeroContainer} />
          <NavbarContainer />
        </Switch>
        <ModalRootContainer />
      </header>
      <main>
        <Route exact path='/tracks/:trackId' component={TrackDetailContainer} />
      </main>
      <footer>
        <PlayerContainer />
      </footer>
    </div>
  );
};

export default App;
