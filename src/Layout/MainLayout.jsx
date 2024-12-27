import "./Mainlayout.css";
import Cart from "../images/cart.svg";
import Dark from "../images/dark-mode.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function MainLayout({ children }) {
  const cart = useSelector((state) => state.cart);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    cart.length > 0 &&
      cart.forEach((value) => {
        sum += Number(value.count);
      });
    setCount(sum);
  }, [cart]);

  function handleRedirectToCart() {
    navigate(`/cart/${id}`);
  }

  return (
    <div>
      <div className="header-top">
        <div className="container">
          <div className="userName">
            <p>Sign in / Guest</p>
            <p>Create Account</p>
          </div>
        </div>
      </div>
      <header>
        <div className="header">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <p>C</p>
              </div>
              <div className="menus">
                <ul>
                  <li className="link">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active" : "noactive"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="link">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="link">
                    <NavLink to="/products">Products</NavLink>
                  </li>
                </ul>
              </div>
              <div className="cart">
                <img src={Dark} alt="" />
                <div onClick={handleRedirectToCart} className="cart-count">
                  <img src={Cart} alt="" />
                  <p>{count}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

export default MainLayout;
