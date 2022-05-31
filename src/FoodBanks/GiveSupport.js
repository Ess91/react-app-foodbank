import React, { useState, useEffect } from "react";
import '../FoodBanks/GiveSupport.css'
import FoodBank from '../FoodBanks/FoodBank'


function GiveSupport() {
  const [foodBanks, setFoodBanks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getFoodbanks();
  }, [query]);

  const getFoodbanks = async () => {
    const response = await fetch(
      `https://www.givefood.org.uk/api/2/foodbanks/search/?address=${query}`
    );

    const data = await response.json();
    setFoodBanks(data);
    console.log(data);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
    //console.log(search);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="giveSupport">
<div className="headers">
<h1>Give Support</h1>
<img
          className="images"
          src="./homeimage.png"
          alt="Grocery Bag"
        />
</div>

    
      <form onSubmit={getSearch} className="searchForm">
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search Location..."
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      <div className="giveList">
      {foodBanks.map((foodbank) => (
        <FoodBank 
        key={foodbank.name}
        name={foodbank.name}
        address={foodbank.address}
        phone={foodbank.phone}
        website={foodbank.urls.homepage}
        email={foodbank.email}
        needs={foodbank.needs.needs} />
      ))}
      </div>
     
    </div>
  );
}
export default GiveSupport;