import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavbarLoggedOut = ({ signinForm, signupForm }) => (
  <div className='navbar-container'>
    <header className="navbar logged-out">
      <Link to='/' className="logo-button-full navbar-button"></Link>
      <NavLink exact to='/' className="home-button navbar-button" >
        Home
      </NavLink>
      <form className="nav-search-form" >
        <input
          type="search"
          className="nav-search-input"
          placeholder="Search for artists, bands, tracks"
        />
        <button type="submit" className="search-icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <NavLink to='/upload' className="upload-button navbar-button" >
        Upload
      </NavLink>
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
