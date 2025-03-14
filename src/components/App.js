import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import CategoryTabs from './CategoryTabs';
import PortfolioList from './PortfolioList';
import Footer from './Footer';
import { usePortfolio } from '../context/PortfolioContext';
import '../styles/App.css';

function App() {
  const { fetchPortfolioItems } = usePortfolio();
  
  useEffect(() => {
    // Fetch the portfolio items when the app loads
    fetchPortfolioItems();
  }, [fetchPortfolioItems]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <CategoryTabs />
        <Routes>
          <Route path="/" element={<PortfolioList />} />
          <Route path="/about" element={<div className="page"><h1>About Us</h1><p>Information about me and my work.</p></div>} />
          <Route path="/contact" element={<div className="page"><h1>Contact</h1><p>Contact details and form.</p></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
