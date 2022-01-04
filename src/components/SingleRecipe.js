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
        sourceUrl,
        sourceName,
        readyInMinutes,
        servings,
        analyzedInstructions,
        nutrition
      } = recipe;
     
      let nutrients = nutrition.nutrients;
      const nutArr = [];

      for(let i=0; i<nutrients.length; i++){
        if(nutrients[i].name === 'Calories' || nutrients[i].name === 'Fat' ||
          nutrients[i].name === 'Carbohydrates' || nutrients[i].name === 'Protein' ||
          nutrients[i].name === 'Fiber' || nutrients[i].name === 'Sugar' ||
          nutrients[i].name === 'Sodium' ) {
              nutArr.push(nutrients[i])
          }
      }


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
            {nutrition && nutArr.map(nutrient => (
              <div className="nutritional-info">
                {nutrient.name ==="Carbohydrates" ? 
                <span className='nutrient nutrient-name'>Carbs</span>
                  : <span className='nutrient nutrient-name'>{nutrient.name}</span>}
                <span className='nutrient nutrient-amount'>{nutrient.amount}{nutrient.unit}</span>
              </div>
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
