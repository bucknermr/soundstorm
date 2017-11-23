import React from 'react';
import { Redirect, Link, NavLink } from 'react-router';

const NavbarLoggedOut = ({ signinForm, signupForm }) => (
  <div className='navbar-container'>
    <header className="navbar">
      <Link to='/stream' className="logo-button navbar-button"></Link>
      <NavLink to='/stream' className="home-button navbar-button" >
        Home
      </NavLink>
      <Link to='/stream' className="collection-button navbar-button" >
      Collection
    </Link>
      <form className="nav-search-form" >
        <input
          type="search"
          className="nav-search-input"
          placeholder="Search"
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
        className="navbar-sign-in navbar-button">Sign in</button>
      <button
        type="button"
        onClick={signupForm}
        className="navbar-create-account navbar-button">Create account
      </button>
    </header>
  </div>
);

export default NavbarLoggedOut;
