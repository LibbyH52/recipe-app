import React, {useState, useEffect} from 'react';
import RecipeItem from './RecipeItem';
import './Recipes.css'


const Recipes = ({ recipes }) => {

  return (
    <div className="recipe-container">
      {recipes.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

export default Recipes;
