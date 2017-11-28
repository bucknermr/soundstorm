import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

const NavbarLoggedIn = ({ currentArtist, logout, trackUploadForm }) => {

  return (
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
        <button
          className="upload-button navbar-button"
          onClick={trackUploadForm}
        >
          Upload
        </button>
        <NavLink to={`/artists/${currentArtist.id}`} className="profile-button navbar-button" >
          {currentArtist.name}
        </NavLink>
        <button
          type="button"
          onClick={() => logout().then(() => <Redirect to="/" />)}
          className="logout-button navbar-button">Sign Out</button>
      </header>
    </div>
  );
};

export default NavbarLoggedIn;
