import React from 'react';
import NavbarContainer from './header/navbar_container';
import SplashPage from './splash_page';
import ModalRootContainer from './modals/modal_root_container';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router';

import TrackDetailContainer from './tracks/track_detail_container';
import PlayerContainer from './audio/player_container';
import ArtistDetailContainer from './artists/artist_detail_container';

const App = () => {
  return (
    <div>
      <header>
        <Switch>
          <AuthRoute exact path='/' component={SplashPage} />
          <NavbarContainer />
        </Switch>
        <ModalRootContainer />
      </header>
      <main id="main">
        <Route exact path='/tracks/:trackId' component={TrackDetailContainer} />
        <Route exact path='/artists/:artistId' component={ArtistDetailContainer} />
      </main>
      <footer>
        <PlayerContainer />
      </footer>
    </div>
  );
};

export default App;
