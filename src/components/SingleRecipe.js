import React, {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './SingleRecipe.css'

const SingleRecipe = ({getRecipe, recipe}) => {
  const params = useParams();
  const goBack=useNavigate();


  useEffect(() => {
        getRecipe(params.id)
        // eslint-disable-next-line
      }, [])
      
      const {
        title,
        image,
        extendedIngredients,
        instructions,
        dishTypes,
        sourceUrl,
        sourceName,
        readyInMinutes,
        servings,
        analyzedInstructions,
        nutrition
      } = recipe;
     
      console.log(recipe);


  return (
    <div className="single-container">
      <button className="btn-back" onClick={() => goBack('/recipes')}>
        Back to Search
      </button>
      <div className="single-header">
        <div className="single-info">
            <h3 className="sr-title">{title}</h3>
            <p className="acknowledge">
              &copy; <a href={sourceUrl}>{sourceName}</a>
            </p>
            <div className="info">
                <span className="servings">Serves: {servings}</span>
                <span className="ready-time">Ready In: {readyInMinutes} minutes</span>
            </div>
            <div className="nutrition">
            {nutrition && nutrition.nutrients.map(nutrient => (
              <span className="nutritional-info">
                <span className='nutrient-name'>{nutrient.name}</span>
                <span className='nutrient-amount'>{nutrient.amount}</span>
                <span className='nutrient-unit'>{nutrient.unit}</span>
              </span>
            ))}
            </div>
          </div>
          <div className="single-img">
            <img src={image} alt={title}  className="sr-img" />
          </div>
      </div>
      <div className="recipe-details">
        <div className="ingredients">
            <h4>Ingredients</h4>
            <ul>
              {extendedIngredients && extendedIngredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul> 
          </div>
          <div className="instructions">
            <h4>Instructions</h4>
            <ol>
              { analyzedInstructions ?
                analyzedInstructions && analyzedInstructions[0].steps.map(instruction => (
                  <li key={instruction.number}>{instruction.step}</li>
                )) :
                <p>{instructions}</p>
              } 
              </ol>
          </div>
        </div>
    </div>
  )
}
export default SingleRecipe;
