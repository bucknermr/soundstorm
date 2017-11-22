import React from 'react';
import NavbarContainer from './header/navbar_container';
import SessionFormContainer from './session/session_form_container';
import Hero from './header/hero';

const App = () => {
  return (
    <div>
      <header>
        <Hero />
        <NavbarContainer />
        <SessionFormContainer />
      </header>
    </div>
  );
};

export default App;
