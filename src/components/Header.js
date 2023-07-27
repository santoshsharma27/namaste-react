import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import useOnline from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const isOnline = useOnline();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 sm:px-6 font-semibold py-5">
      <Link to="/" className="tracking-widest">
        Fast Food Co.
      </Link>
      <nav>
        <ul className="flex items-center space-x-7  ">
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
            <NavLink to="/cart" className="flex items-center space-x-2">
              <HiShoppingCart />
              <span>
                <span>{cartItems.length} </span>
                Cart
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/grocery">Grocery</NavLink>
          </li>

          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
