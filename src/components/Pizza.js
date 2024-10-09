import React, { useState, useEffect } from 'react';
import pizzas from "../../utils/pizza.json";
import Card from './Card';

const PizzaList = () => {
  const [filteredPizzas, setFilteredPizzas] = useState(pizzas);
  const [isVegFilter, setIsVegFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    let updatedPizzas = [...pizzas];

  
    if (isVegFilter) {
      updatedPizzas = updatedPizzas.filter(pizza => pizza.veg);
    }

 
    if (sortOrder === 'low-to-high') {
      updatedPizzas.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-to-low') {
      updatedPizzas.sort((a, b) => b.price - a.price);
    }

    setFilteredPizzas(updatedPizzas);
  }, [isVegFilter, sortOrder]);

  return (
    <div className='w-full p-4 mt-20'>
      <h1 className="text-2xl font-bold mb-4">Pizza List</h1>

    
      <div className="flex items-center space-x-4 mb-6">
  
      <label className="flex items-center">
  <input
    type="checkbox"
    checked={isVegFilter}
    onChange={() => setIsVegFilter(prev => !prev)}
    className="hidden"
  />
  <span className={`w-6 h-6 flex items-center justify-center border-2 border-green-500 rounded-md ${isVegFilter ? 'bg-green-500' : 'bg-white'} transition-all duration-200`}>
    {isVegFilter && (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    )}
  </span>
  <span className={`ml-2 text-green-700 ${isVegFilter ? 'font-bold' : ''}`}>Veg Only</span>
</label>

    
<div className="flex items-center">
  <label className="mr-2 text-pink-700 font-bold">Sort by Price:</label>
  <select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    className="p-2 border border-pink-500 rounded-md bg-white text-pink-700 appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
  >
    <option value="none" className="bg-white">None</option>
    <option value="low-to-high" className="bg-white">Low to High</option>
    <option value="high-to-low" className="bg-white">High to Low</option>
  </select>
  <svg
    className="w-4 h-4 ml-2 text-pink-500 pointer-events-none"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 9l6 6 6-6"
    />
  </svg>
</div>

      </div>


      <ul className='flex justify-between flex-wrap'>
        {filteredPizzas.map((pizza, index) => (
          <Card key={index} data={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
