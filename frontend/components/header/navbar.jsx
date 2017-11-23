import React from 'react';
import NavbarLoggedIn from './navbar_logged_in';
import NavbarLoggedOut from './navbar_logged_out';

const Navbar = ({logout, currentArtist, signupForm, signinForm}) => {
  if (currentArtist) {
    return (
      <NavbarLoggedIn
        currentArtist={currentArtist}
        logout={logout}
      />
    );
  } else {
    return (
      <NavbarLoggedOut
        signinForm={signinForm}
        signupForm={signupForm}
      />
    );
  }
};

export default Navbar;
