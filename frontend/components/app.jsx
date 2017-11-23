import React from 'react';
import NavbarContainer from './header/navbar_container';
import SessionFormContainer from './session/session_form_container';
import HeroContainer from './header/hero_container';
import ModalRootContainer from './session/modal_root_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router';

const App = () => {
  return (
    <div>
      <header>
        <AuthRoute exact path='/' component={HeroContainer} />
        <NavbarContainer />
        <ModalRootContainer />
      </header>
    </div>
  );
};

export default App;
