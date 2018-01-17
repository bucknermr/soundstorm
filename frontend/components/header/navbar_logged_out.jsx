import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchFormContainer from './search_form_container';

const NavbarLoggedOut = ({ signinForm, signupForm, uploadLoggedOut }) => (
  <div className='navbar-container'>
    <header className="navbar logged-out">
      <Link to='/' className="logo-button-full navbar-button"></Link>
      <NavLink exact to='/' className="home-button navbar-button" >
        Home
      </NavLink>
      <SearchFormContainer />
      <button className="upload-button navbar-button"
        onClick={() => uploadLoggedOut("Please signup to upload your own music!")}>
        Upload
      </button>
      <button
        type="button"
        onClick={signinForm}
        className="navbar-sign-in ">Sign in</button>
      <button
        type="button"
        onClick={signupForm}
        className="navbar-create-account navbar-button">Create account
      </button>
    </header>
  </div>
);

export default NavbarLoggedOut;
