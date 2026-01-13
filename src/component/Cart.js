import { useSelector, useDispatch } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log("CartItems :" ,cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItems());
    };

    return(
        <div className="text-center m-10 p-10">
            <h1 className="font-bold text-3xl">Cart</h1>
            {cartItems.length === 0 && (
                <p className="p-10 mt-50 text-5xl text-gray-400">Your cart is empty. Add items to the cart!</p>
            ) 
            }
            <div>
                <button className="text-white bg-black px-4 py-1.5 text-2xl m-5 rounded-2xl cursor-pointer hover:text-black hover:bg-white hover:border-black hover:border-2 font-medium"
                onClick={handleClearCart}>Clear</button>
            </div>
            <div className=" flex flex-wrap" >
                {cartItems.map((item) => (
                    <RestaurantCard key={item.info.id} resData={item} />                    
                ))}                
            </div>
        </div>
    )
}

export default Cart;