import { useState } from "react";
import { NavLink ,Link} from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FiMenu, FiX, FiUser, FiBell, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const menuItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Recipe", path: "/recipe" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Help", path: "/help" },
    { id: 6, name: "Dashboard", path: "/dashboard" },
  ];

  const profileMenuItems = [
    { id: 1, name: "Profile", path: "/profile", icon: <FiUser className="w-5 h-5"/>},
    { id: 2, name: "Notifications", path: "/notifications", icon: <FiBell className="w-5 h-5" /> },
    { id: 3, name: "Login", path: "/login", icon: <FiLogOut className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg h-16">
      <div className="max-w-full mx-auto px-4 tablet:px-6 laptop:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl text-white">
              Global Venture
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="default:hidden tablet:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-400 bg-opacity-75 px-3 py-2 rounded-md text-medium font-medium"
                    : "text-white hover:bg-blue-400 hover:bg-opacity-75 px-3 py-2 rounded-md text-medium font-medium"
                }
              >
                {item.name}
              </NavLink>
              ))}
            </div>
          </div>

          {/* Profile Menu */}
          <div className="ml-4 flex items-center tablet:ml-6">
            <Link to="/cart">
              <FaCartPlus className="text-3xl mr-4 text-white hover:text-blue-400 hover:bg-opacity-75" />
            </Link>
            <div className="relative">
              <button
                className="flex items-center max-w-xs bg-blue-400 bg-opacity-25 rounded-full p-2"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <FiUser className="h-6 w-6 text-white" />
              </button>

              {showProfileMenu && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50">
                  {profileMenuItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowProfileMenu(false)} // Close menu on click
                    >
                      {item.icon}
                      <span className="ml-3">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex tablet:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-blue-400"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 inset-y-[4rem] bg-gray-800 bg-opacity-90 z-50 transition-all duration-300">
          <div className="px-2 py-3 space-y-1 mobile:px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)} 
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-400 bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
                    : "text-white hover:bg-blue-400 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
