import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cart
      .map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter(item => item.quantity > 0);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

 

  


  return (
    <div className="w-full p-4 mt-20">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 mb-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18l-1.5 12H5L3 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18l-1.5 12H5L3 3z"
            />
            <path d="M8 21a1 1 0 11-2 0 1 1 0 012 0zM16 21a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
          <p className="text-lg font-semibold">Your cart is empty!</p>
          <p className="text-gray-600">Looks like you haven't added anything yet.</p>
          <Link to='/'
            className="mt-4 p-2 bg-pink-500 text-white rounded"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li 
                key={item.id} 
                className="p-2 m-2 bg-gray-100 flex justify-between items-center"
              >
                <div>
                  <img 
                    className="h-16 w-16" 
                    src={item.img} 
                    alt={item.name} 
                  />
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Price: Rs {item.price} /-</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="p-1 bg-red-500 text-white mr-2 rounded-md h-fit"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="p-1 bg-green-500 text-white rounded-md h-fit"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-4 p-1 bg-red-600 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold">Total: Rs {getTotalPrice()} /-</h3>
          <button
            onClick={handleCheckout}
            className="p-2 mt-4 bg-pink-500 rounded-md text-white"
          >
            Checkout
          </button>
        </div>
      )}

      
      {isModalOpen && !isOrderPlaced && (
        <UserInfo setIsOrderPlaced={setIsOrderPlaced} setCart={setCart} setIsModalOpen={setIsModalOpen} />
      )}

     
      {isOrderPlaced && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96 text-center">
            <h2 className="text-xl font-bold mb-4">Order Placed Successfully!</h2>
            <p className="mb-4">Thank you for your order.</p>
            <p>Your order will be processed shortly.</p>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
