import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import FilterCuisines from "./filteredCuisines";
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import { Accoundian } from "./Accordian";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const Body = () => {
  const {
    ListOfRestuarant,
    filteredRestaurant,
    setFilteredRestaurant,
    SearchText,
    setSearchtext,
    filteredCuisines
  } = useBody();

  const Status = useOnlineStatus();

  if(Status === false) return (<h1>You're Offline. Please Check your internet connection</h1>);

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  const isLabeled = (res) => res?.info?.avgRating > 4.5;

  const {loggedInUser, setUserInfo} = useContext(UserContext);



  return ListOfRestuarant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="cuisinelist">
        <div className="text-2xl m-5 ">What's on your mind</div>
        <div className="flex p-5">
          {filteredCuisines.map((items) => (
            <FilterCuisines key={items.id} items={items} />
          ))}
        </div>
      </div>

      <div className="flex ms-33">
        <div className="font-medium text-base pt-px-3"> 
          <button className="text-blue-50 cursor-pointer p-3 rounded-md m-5 bg-amber-600 shadow-lg shadow-amber-500/50"
            onClick={() => {
              const filteredRes = ListOfRestuarant.filter(
                (res) => res?.info?.avgRating > 4.5             
              );            
              setFilteredRestaurant(filteredRes);
            }}
          >
            Top rated Restaurant
          </button>
        </div>

        <div className="font-medium text-base px-5">
          <input
            type="text"
            className="inset-shadow-sm p-3"
            value={SearchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
              console.log(SearchText);
            }}
          ></input>
          <button
            className="text-blue-50 cursor-pointer p-3 rounded-md my-5 bg-amber-600 shadow-lg shadow-amber-500/50"
            onClick={() => {
              const filteredSearch = ListOfRestuarant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(SearchText.toLowerCase())
              );
              setFilteredRestaurant(filteredSearch);
            }}
          >
            Search
          </button>
        </div>
        <div className="text-base px-5">
          <label>User Name : </label>
          <input
            type="text"
            className="inset-shadow-sm p-3"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="flex flex-wrap justify-center m-5">
        {filteredRestaurant.map((restaurant) => 
        isLabeled(restaurant) ? 
        (
          <PromotedRestaurantCard key={restaurant.info.id} resData={restaurant} />
        ):     
        (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        )
        )}
      </div> 
      <div><Accoundian/></div>     
    </div>
  );
};
export default Body;
