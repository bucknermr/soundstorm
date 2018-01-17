import React from 'react';
import NavbarContainer from './header/navbar_container';
import SplashPageContainer from './splash_page_container';
import ModalRootContainer from './modals/modal_root_container';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router';

import TrackDetailContainer from './tracks/track_detail_container';
import PlayerContainer from './audio/player_container';
import ArtistDetailContainer from './artists/artist_detail_container';
import HomePage from './home_page';
import SearchContainer from './search/search_container';

const App = () => {
  return (
    <div>
      <header id="header">
        <Switch>
          <AuthRoute exact path='/' component={SplashPageContainer} />
          <NavbarContainer />
        </Switch>
        <ModalRootContainer />
      </header>
      <main id="main">
        <Route exact path='/stream/' component={HomePage}/>
        <Route exact path='/tracks/:trackId' component={TrackDetailContainer} />
        <Route exact path='/artists/:artistId' component={ArtistDetailContainer} />
        <Route exact path='/search' component={SearchContainer} />
      </main>
      <footer>
        <PlayerContainer />
      </footer>
    </div>
  );
};

export default App;
