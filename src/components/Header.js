import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import useOnline from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isOpen, setIsOpen] = useState(false); // State for the hamburger menu

  const isOnline = useOnline();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between bg-white text-black font-bold fixed w-screen shadow-md z-50 h-16 px-4 md:px-10 md:bg-white">
      <Link
        to="/"
        className="tracking-widest font-bold text-[24px] transition-colors duration-300 hover:text-red-600"
      >
        Fast Food Co.
      </Link>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes size={24} className="text-black" />
          ) : (
            <FaBars size={24} className="text-black" />
          )}
        </button>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex pr-8">
        <ul className="flex items-center space-x-7">
          <li>{isOnline ? "🟢" : "🔴"}</li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : ""} hover:text-red-500`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : ""} hover:text-red-500`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : ""} hover:text-red-500`
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="flex items-center space-x-2">
              <HiShoppingCart />
              <span>{cartItems.length > 0} Cart</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : ""} hover:text-red-500`
              }
            >
              Grocery
            </NavLink>
          </li>
          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
            className="text-black transition duration-300 hover:text-red-500"
          >
            {btnNameReact}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </nav>

      {/* Full-Screen Navigation Menu for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-start py-16">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col items-center space-y-8">
            <li>{isOnline ? "🟢" : "🔴"}</li>
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className="text-white text-2xl transition-colors duration-300 hover:text-red-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className="text-white text-2xl transition-colors duration-300 hover:text-red-500"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className="text-white text-2xl transition-colors duration-300 hover:text-red-500"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                onClick={toggleMenu}
                className="flex items-center space-x-2 text-white text-2xl transition-colors duration-300 hover:text-red-500"
              >
                <HiShoppingCart />
                <span>{cartItems.length > 0} Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/grocery"
                onClick={toggleMenu}
                className="text-white text-2xl transition-colors duration-300 hover:text-red-500"
              >
                Grocery
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                }}
                className="text-white text-2xl transition-colors duration-300 hover:text-red-500"
              >
                {btnNameReact}
              </button>
            </li>
            <li className="text-white">{loggedInUser}</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
