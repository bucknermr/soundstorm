import React from 'react';
import NavbarContainer from './header/navbar_container';
import SessionFormContainer from './session/session_form_container';

const App = () => {
  return (
    <div>
      <header>
        <NavbarContainer />
        <SessionFormContainer />
      </header>
    </div>
  );
};

export default App;
