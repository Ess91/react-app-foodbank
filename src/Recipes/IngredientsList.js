import React from "react";
import './RecipesList.css'

function IngredientsList({ key, ingredients }) {
  return ingredients.map((ingredient) => {
    return (
      <ul className="ingredientsList">
          <p>{key}</p>
        <li className="ingredientText">{ingredient}</li>
      </ul>
    );
  });
}

export default IngredientsList;
