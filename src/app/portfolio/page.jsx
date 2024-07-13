'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const portfolios = [
  {
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    liveLink: '#',
    category: 'Design'
  },
  {
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    liveLink: '#',
    category: 'Design'
  },
  {
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    liveLink: '#',
    category: 'Design'
  },
  {
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    liveLink: '#',
    category: 'Development'
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredPortfolios = activeTab === 'All'
    ? portfolios
    : portfolios.filter(portfolio => portfolio.category === activeTab);

  return (
    <div className="bg-gray-800 p-10 mt-10">
      <h2 className="text-white text-4xl font-bold mb-10">Portfolio</h2>
      <div className="flex justify-center mb-10">
        {['All', 'Design', 'Development'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mx-2 px-4 py-2 rounded-md text-white font-bold transition ${activeTab === tab ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredPortfolios.map((portfolio, index) => (
          <div key={index} className="relative group">
            <img src={portfolio.image} alt={`Portfolio ${index + 1}`} className="rounded-md w-full h-auto" />
            <Link
              href={portfolio.liveLink}
              className="absolute m-10 inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-2xl font-bold transition-opacity rounded-md"
            >
              See Live
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
