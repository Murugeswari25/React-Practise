import { useState, useEffect } from "react";

 const useBody = () => {
  const [ListOfRestuarant, setListOfRestuarant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [SearchText, setSearchtext] = useState("");
  const [filteredCuisines, setFilteredCuisines] = useState([]);

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
    const ResCardData = 
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    
    const FilteredRes =
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    
    const filteredData =
      jsondata?.data?.cards[0]?.card?.card?.imageGridCards.info || [];

    setListOfRestuarant(ResCardData);
    setFilteredRestaurant(FilteredRes);
    setFilteredCuisines(filteredData);
  };
  return {
    ListOfRestuarant,
    filteredRestaurant,
    setFilteredRestaurant,
    SearchText,
    setSearchtext,
    filteredCuisines
  };
};


export default useBody;