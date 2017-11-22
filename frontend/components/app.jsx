import React from 'react';
import NavbarContainer from './header/navbar_container';
import SessionFormContainer from './session/session_form_container';
import HeroContainer from './header/hero_container';
import ModalRootContainer from './session/modal_root_container';

const App = () => {
  return (
    <div>
      <header>
        <HeroContainer />
        <NavbarContainer />
        {/* <SessionFormContainer /> */}
        <ModalRootContainer />
      </header>
    </div>
  );
};

export default App;
