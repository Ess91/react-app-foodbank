import React, { useState } from "react";
import IngredientsList from "./IngredientsList";
import "./RecipesList.css";


function RecipesList({ key, name, image, website, source, ingredients }) {
  const [show, setShow] = useState(false);

  return (
 
 
    <div className="recipeCard">
      <p className="keyId">{key}</p>
      <img src={image} alt="Recipe Image" />
      <h5 className="ReceipeName"><a href={website} target="_blank">{name}</a></h5>
      <h6 className="sourceInfo">Source: {source}</h6>
      <button className="IngredientsButton" onClick={() => setShow(!show)}>Ingredients</button>
           {show && <IngredientsList ingredients={ingredients} />}

    </div>
  );
}

export default RecipesList;