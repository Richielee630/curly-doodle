import React from 'react';
import PortfolioItem from './PortfolioItem';
import { usePortfolio } from '../context/PortfolioContext';
import '../styles/PortfolioList.css';

function PortfolioList() {
  const { filteredItems, loading, error } = usePortfolio();

  if (loading) {
    return <div className="loading">Loading portfolio items...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (filteredItems.length === 0) {
    return <div className="no-items">No portfolio items found. Try a different search or category.</div>;
  }

  return (
    <div className="portfolio-list">
      {filteredItems.map(item => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default PortfolioList;
