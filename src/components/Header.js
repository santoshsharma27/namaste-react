import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnline from "./utils/useOnlineStatus";

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const isOnline = useOnline();

  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 uppercase sm:px-6 font-semibold py-5">
      <Link to="/" className="tracking-widest">
        Fast Food Co.
      </Link>
      <nav>
        <ul className="flex items-center space-x-6">
          <li>Online Status: {isOnline ? "🟢" : "🔴"}</li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/grocery">Grocery</NavLink>
          </li>

          <button
            className="uppercase"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
