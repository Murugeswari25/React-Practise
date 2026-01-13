import { useState } from "react";
import { CART_ICON } from "../utils/constant";
import { LOGO_URL } from "../utils/constant";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

//if no dependency array => useEffect is called on every render
//if dependency array is empty = [] => useEffect is called initial render(just once)
//if dependency array is [btnName] => called everytime wheneven btnName is updated.

  useEffect(() => {
    console.log("useEffect called")
  }, [btnName]);

  const {loggedInUser} = useContext(UserContext);

  const findstatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-black text-amber-50 m-5 p-5">
      <div className="flex">
        <img className="w-40" src={LOGO_URL}></img>
        <div className="p-5 my-9 font-bold text-5xl italic">Yum-Tum</div>
      </div>
      <div >
        <ul className="flex my-5 p-9 text-2xl items-center  ">
          <li className="px-5">Online Status : {findstatus ? "🟢" : "🔴" } </li>
          <li className="px-5 hover:text-amber-600"><Link to={"/"}>Home</Link></li>
          <li className="px-5 hover:text-amber-600"><Link to={"/about"}>About Us</Link></li>
          <li className="px-5 hover:text-amber-600"><Link to={"/contact"}>Contact Us</Link></li>
          <li className="px-5 hover:text-amber-600"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="px-5 relative hover:text-amber-600">
            <Link to={"/cart"}>
              <img className="w-10" src={CART_ICON}></img>
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                ({cartItems.length})
              </span>
            </Link>            
          </li>
          <li className="px-5">
            <button
              className="text-black  py-2 px-4 cursor-pointer rounded-lg font-medium bg-amber-50 hover:bg-amber-600"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
