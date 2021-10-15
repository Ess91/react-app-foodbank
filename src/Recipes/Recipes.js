import React, { useEffect, useState } from "react";
import RecipesList from "../Recipes/RecipesList";
import './Recipes.css';

function Recipes() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ID = process.env.REACT_APP_API_ID;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    //console.log(data.hits);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
    //console.log(search);
  };

 

  return (
    <div>
      <h1>Recipe Book</h1>

      <img className="images" src="../cooking-book.jpg" alt="Recipe Book" />

      <form onSubmit={getSearch} className="searchForm">
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search Ingredients..."
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map((recipe) => (
        <RecipesList
          key={recipe.recipe.foodId}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          source={recipe.recipe.source}
          website={recipe.recipe.url}
          ingredients={recipe.recipe.ingredientLines}
        />
      ))}
      </div>
     
    </div>
  );
}

export default Recipes;