import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import '../styles/CategoryTabs.css';

function CategoryTabs() {
  const { categories, activeCategory, setActiveCategory } = usePortfolio();

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="category-tabs">
      <button 
        className={`category-tab ${activeCategory === 'All' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('All')}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button 
          key={index} 
          className={`category-tab ${activeCategory === category ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
