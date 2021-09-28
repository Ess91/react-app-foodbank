import React, { useState, useEffect } from "react";
import "../FoodBanks/GetSupport.css";
import GetFoodBankList from "./GetFoodBankList";

function GetSupport() {

  const [foodBanksList, setFoodBanksList] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getList();
  }, [query]);

  const getList = async () => {
    const response = await fetch(
      `https://www.givefood.org.uk/api/2/foodbanks/search/?address=${query}`
    );

    const data = await response.json();
    setFoodBanksList(data);
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
<h1>Get Support</h1>
<img
          className="images"
          src="./davor-nisevic-qPK8zLIeNiU-unsplash.jpg"
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
      <div className="GetList">
      {foodBanksList.map((foodbank) => (
        <GetFoodBankList 
        key={foodbank.name}
        name={foodbank.name}
        address={foodbank.address}
        phone={foodbank.phone}
        website={foodbank.urls.homepage}
        email={foodbank.email}
        />
      ))}
        
      </div>
      
    </div>
  );
}

export default GetSupport;