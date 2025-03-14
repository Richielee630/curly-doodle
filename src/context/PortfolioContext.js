import React, { createContext, useState, useContext, useCallback, useMemo } from 'react';
import { getPortfolioItems } from '../services/api';

const PortfolioContext = createContext();

export function usePortfolio() {
  return useContext(PortfolioContext);
}

export function PortfolioProvider({ children }) {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from portfolio items
  const categories = useMemo(() => {
    if (!portfolioItems.length) return [];
    const uniqueCategories = [...new Set(portfolioItems.map(item => item.category))];
    return uniqueCategories;
  }, [portfolioItems]);

  // Filter items based on search term and active category
  const filteredItems = useMemo(() => {
    return portfolioItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [portfolioItems, searchTerm, activeCategory]);

  const fetchPortfolioItems = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getPortfolioItems();
      setPortfolioItems(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch portfolio items');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    portfolioItems,
    filteredItems,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
    categories,
    fetchPortfolioItems
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}
