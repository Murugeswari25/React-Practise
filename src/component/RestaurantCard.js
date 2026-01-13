import { useContext } from "react";
import { RATING_ICON } from "../utils/constant";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/userContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantCard = ({resData}) => {
  const {
    cloudinaryImageId,
    costForTwo,
    name,
    avgRating,
    cuisines,
    locality,
    sla,
  } = resData?.info;
  const {loggedInUser} = useContext(UserContext);
  
  const Dispatch = useDispatch();
  const handleAddItem = (item) => {
    Dispatch(addItem(item));
  };
  
  return (
    <div className="w-110 m-3 cursor-pointer p-5 rounded-2xl hover:shadow-2xl">
      <div className="py-1">
        <img
          className="w-100 h-85 object-cover rounded-3xl"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      
      <div className="py-1 text-3xl font-bold">{name}</div>
      <div className="py-0.5">{costForTwo}</div>
        <div className="flex justify-between py-0.5">
          
          <div className="w-6 flex ">
            <img className="w-6" alt="ratings" src={RATING_ICON} />
            <div className="px-2">{avgRating}</div>
          </div>
          <div className="px-10">{sla.slaString}</div>
        </div>
      <div className="flex-col flex-wrap py-0.5">{cuisines.join(", ")}</div>
      <div className="py-0.5">{locality}</div>
      <div className="py-2">User : {loggedInUser}</div>
      <button className="bg-black text-amber-50 px-4 py-2 rounded-2xl cursor-pointer font-medium hover:bg-white hover:text-black hover:border-black hover:border-2 hover:font-medium" 
      onClick={() => handleAddItem(resData)}>Add +</button>

    </div>
  );
};

export const withPromotedLabel  = (RestaurantCard) =>{
    return(props) => {
      return(
        <div className="relative">
          <label className="absolute mt-15 ml-10 rounded-lg text-white font-semibold py-0.5 px-5 opacity-60 bg-black">Promoted</label>
          <RestaurantCard {...props} />
        </div>
      )
    }
  };

export default RestaurantCard;
