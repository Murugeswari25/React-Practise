import { useState } from "react";
import { CART_ICON } from "../utils/constant";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
        <div className="AppName">Yum-Tum</div>
      </div>
      <div className="Nav-Items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img className="cart" src={CART_ICON}></img>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
