import React, { useState, useEffect} from "react";
import RestaurantDataService from "../services/restaurant.js"
import { Link } from "react-router-dom";


const RestaurantsList = props => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchZip, setSearchZip] = useState("");
  const [searchCuisine, setSearchCuisine] = useState("");
  const [cuisines, setCuisines] = useState(['All Cuisines']);

  useEffect(() => {
    retrieveRestaurants();
    retrieveCuisines();
  })
  
  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  }

  const onChangeSearchZip = e => {
    const searchZip = e.target.value;
    setSearchZip(searchZip);
  }

  const onChangeSearchCuisine = e => {
    const searchCuisine = e.target.value;
    setSearchCuisine(searchCuisine);
  }

  const retrieveRestaurants = () => {
    RestaurantDataService.getAll().then(response => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
    }).catch(e => {
        console.log(e);
    });
  };

  const retrieveCuisines = () => {
    RestaurantDataService.getCuisines().then(response => {
        console.log(response.data);
        setCuisines(["All Cuisines"].concat(response.data));
    }).catch(e => {
        console.log(e);
    });
  };

  const refreshList = () => {
    retrieveRestaurants();
  }

  return (
    <div className="App">
        Restaunrant List
    </div>
  );
}

export default RestaurantsList;