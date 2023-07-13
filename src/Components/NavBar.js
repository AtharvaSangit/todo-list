import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="bg-black border-gray-200  px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <ul className="flex">
     
          
          <li className="mr-6">
            <NavLink className="text-blue-500 hover:text-blue-800" to="/list">list</NavLink>
          </li>
      
          <li className="mr-6">
            <NavLink className="text-blue-500 hover:text-blue-800" to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
