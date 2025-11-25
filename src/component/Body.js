import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListOfRestuarant, setListOfRestuarant] = useState([]);

  const [SearchText, setSearchtext] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    console.log(jsondata);

    //Optional Chaining
    setListOfRestuarant(
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (ListOfRestuarant.length === 0) ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="filter-box"> 
          <button
          onClick={() => {
            const filteredRes = ListOfRestuarant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestuarant(filteredRes);
          }}
        >
          Search Top rated Restaurant
        </button>
        </div>        
        <div>
          <input type="text" className="search-box" value={SearchText} onChange={(e) => {
            setSearchtext(e.target.value);
            console.log(SearchText);
          }}
          ></input>
          <button className="searchbtn"
          onClick={() => {
            const filteredSearch = ListOfRestuarant.filter(
              (res)=> res.info.name.include(SearchText)
            );
              setListOfRestuarant(filteredSearch);
          }}  
          >Search</button>
        </div>
        
      </div>
      <div className="res-container">
        {ListOfRestuarant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
