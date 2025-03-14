import React from 'react';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <SearchBar />
      </div>
      <div className="header-center">
        <h1 className="site-title">My Portfolio</h1>
      </div>
      <div className="header-right">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
