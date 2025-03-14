import { mockData } from '../data/mockData';

// In a real app, these functions would make actual API calls
// For this example, we're returning mock data with a delay to simulate network requests

// Simulates API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get all portfolio items
export const getPortfolioItems = async () => {
  await delay(700); // Simulating network delay
  return mockData;
};

// Get a single portfolio item by ID
export const getPortfolioItemById = async (id) => {
  await delay(300);
  const item = mockData.find(item => item.id === id);
  if (!item) {
    throw new Error('Portfolio item not found');
  }
  return item;
};

// In a real app with a backend, you would have additional functions like:
// export const createPortfolioItem = async (item) => { ... };
// export const updatePortfolioItem = async (id, updates) => { ... };
// export const deletePortfolioItem = async (id) => { ... };
