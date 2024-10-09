import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  return (
    <div className="bg-pink-100 shadow-lg fixed top-0 w-full z-50">
      <div className="flex justify-between items-center py-4 px-5 lg:px-10">

        <p className="text-2xl font-bold text-pink-700">Pizzeria</p>

        <button
          className="lg:hidden text-pink-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        <div className={`nav-items ${menuOpen ? "block" : "hidden"} lg:flex lg:space-x-8 lg:items-center`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0">
            <Link to="/">
              <li className={`px-4 py-2 ${location.pathname === '/' ? 'bg-pink-700 text-white' : 'hover:bg-pink-700 hover:text-white'} rounded-md transition-all duration-200`}>
                Home
              </li>
            </Link>
            <Link to="/pizza">
              <li className={`px-4 py-2 ${location.pathname === '/pizza' ? 'bg-pink-700 text-white' : 'hover:bg-pink-700 hover:text-white'} rounded-md transition-all duration-200`}>
                Pizza
              </li>
            </Link>
            <Link to="/dessert">
              <li className={`px-4 py-2 ${location.pathname === '/dessert' ? 'bg-pink-700 text-white' : 'hover:bg-pink-700 hover:text-white'} rounded-md transition-all duration-200`}>
                Dessert
              </li>
            </Link>
            <Link to="/cart">
              <li className={`px-4 py-2 ${location.pathname === '/cart' ? 'bg-pink-700 text-white' : 'hover:bg-pink-700 hover:text-white'} rounded-md transition-all duration-200`}>
                Cart
              </li>
            </Link>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Header;
