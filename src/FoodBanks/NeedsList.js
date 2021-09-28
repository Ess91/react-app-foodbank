import React from 'react'

function NeedsList({ needs }) {
    return needs.map((need) => {
        return (
          <ul className="ingredientsList">
            <li className="ingredientText">{need}</li>
          </ul>
        );
      });
}

export default NeedsList