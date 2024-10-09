import React, { useState } from 'react';

const Card = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find((item) => item.id === data.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...data, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setInCart(true);
  };

  return (
    <div className="w-[250px] flex flex-col h-96 p-2 m-2 shadow-lg bg-pink-50 hover:bg-pink-100 transition-colors">
      <div className="flex-grow flex flex-col">
        <div className="h-32 mb-2 flex items-center justify-center">
          <img className="max-h-full max-w-full object-contain" src={data?.img} alt={data?.name} />
        </div>
        <h2 className="font-semibold text-xl mb-1 truncate">{data?.name}</h2>
        <h3 className="text-sm flex-grow overflow-y-auto">{data?.description}</h3>
      </div>
      
      <div className="mt-2">
        <div className='flex items-center justify-between mb-2'>
          <h4 className="font-medium">{'Rs ' + data?.price + ' /-'}</h4>
          <h4>{data?.veg ? 
            <div className='p-1 w-fit border border-green-500'>
              <div className='rounded-full w-2 h-2 bg-green-500'></div>
            </div> :
            <div className='p-1 w-fit border border-red-500'>
              <div className='rounded-full w-2 h-2 bg-red-500'></div>
            </div>
          }</h4>
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="quantity" className="text-sm">Quantity:</label>
          <select
            id="quantity"
            className="p-1 border border-gray-300 rounded"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleAddToCart}
          className={`p-2 w-full ${inCart ? 'bg-green-500' : 'bg-pink-500'} text-white rounded transition-colors`}
          disabled={inCart}
        >
          {inCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Card;