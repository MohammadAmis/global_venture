import React, { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiUser, FiX } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const menuItems = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Product",
      link: "#",
    //   submenu: ["Breakfast", "Lunch", "Dinner", "Desserts", "Beverages"],
    },
    
    {
      title: "Recipes",
      link: "#",
    //   submenu: ["Recipes", "Food Tips", "Restaurant Reviews"],
    },
    {
        title: "About Us",
        link: "#",
        // submenu: ["Our Story", "Team", "Careers"],
      },
      {
        title: "Contact",
        link: "#",
      },
  ];

  const popularDishes = [
    "Pizza Margherita",
    "Sushi Rolls",
    "Butter Chicken",
    "Pasta Carbonara",
    "Fish and Chips",
    "Caesar Salad",
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = popularDishes.filter((dish) =>
        dish.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0" aria-label="Home">
              <img
                src={logo}
                alt="Food Website Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          <div className="mc:hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setShowDropdown(item.title)}
                onMouseLeave={() => setShowDropdown("")}
              >
                <button
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                >
                  {item.title}
                  {item.submenu && (
                    <FaAngleDown className="ml-1 text-gray-400" />
                  )}
                </button>
                {item.submenu && showDropdown === item.title && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 mt-2">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mc:hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <FiSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for dishes or restaurants"
                  className="ml-2 bg-transparent focus:outline-none w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {suggestions.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="">
                <FaCartPlus className="mr-2 text-2xl  text-gray-700 hover:bg-orange-50 hover:text-orange-500"/>
            </div>

            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors flex items-center">
              <FiUser className="mr-2" />
              Sign In
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-2">
            <div className="relative">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <FiSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for dishes or restaurants"
                  className="ml-2 bg-transparent focus:outline-none w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {suggestions.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2 z-50">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-gray-200 py-2">
            {menuItems.map((item) => (
              <div key={item.title}>
                <button
                  className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  onClick={() =>
                    setShowDropdown(
                      showDropdown === item.title ? "" : item.title
                    )
                  }
                >
                  {item.title}
                  {item.submenu && <FaAngleDown className="text-gray-400" />}
                </button>
                {item.submenu && showDropdown === item.title && (
                  <div className="bg-gray-50">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-8 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 py-2">
              <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center">
                <FiUser className="mr-2" />
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;