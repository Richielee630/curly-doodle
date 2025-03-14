import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import '../styles/SearchBar.css';

function SearchBar() {
  const { searchTerm, setSearchTerm } = usePortfolio();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button className="search-button">
        <span role="img" aria-label="search">🔍</span>
      </button>
    </div>
  );
}

export default SearchBar;
