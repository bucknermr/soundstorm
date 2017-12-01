import React from 'react';
import NavbarLoggedIn from './navbar_logged_in';
import NavbarLoggedOut from './navbar_logged_out';

const Navbar = (
  {
    logout,
    currentArtist,
    signupForm,
    signinForm,
    trackUploadForm,
    uploadLoggedOut
  }) => {

  if (currentArtist) {
    return (
      <NavbarLoggedIn
        currentArtist={currentArtist}
        logout={logout}
        trackUploadForm={trackUploadForm}
      />
    );
  } else {
    return (
      <NavbarLoggedOut
        signinForm={signinForm}
        signupForm={signupForm}
        uploadLoggedOut={uploadLoggedOut}
      />
    );
  }
};

export default Navbar;
