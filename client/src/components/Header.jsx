import React from "react";
import logo from '/images/logo.png'; // Adjust the path based on your project structure
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center p-4">
       <Link to='/'>
       <h1 className="font-bold text-sm sm:text-xl flex items-center ">
          <img src={logo} alt="Logo" className="h-auto w-14 mr-2 sm:mr-4 lg:mr-6 xl:mr-8" />
          <span className="text-slate-500 ">Jayani</span>
          <span className="text-slate-700 ">Furnitures</span>
        </h1>
       </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:outline-none w-24 sm:w-64"></input>
           <FaSearch className="text-slate-600"/>
        </form>
        <ul className="flex gap-4">
          <Link to='/'>
            <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
          </Link>
          <Link to='/about'>
          <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
          </Link>
          <Link to='/sign-in'>
          <li className="sm:inline text-slate-700 hover:underline">Sign In</li>
          </Link>
          <li className="hidden sm:inline text-slate-700 hover:underline">Products</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
