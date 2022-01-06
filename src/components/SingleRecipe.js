import React, {useEffect, Fragment} from 'react';
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
        dishTypes,
        cuisines,
        diets,
        analyzedInstructions,
        nutrition
      } = recipe;
      console.log(recipe);

  return (
    <div className="sr-container">
      <button className="btn-back" onClick={() => goBack('/recipes')}>
        Back to Search
      </button>
      <div className="sr-header">
        <div className="sr-info">
            <h3 className="sr-title">{title}</h3>
            <p className="acknowledge">
              &copy; <a href={sourceUrl}>{sourceName}</a>
            </p>
            <div className="info">
                <span className="servings">Serves: {servings}</span>
                <span className="ready-time">Ready In: {readyInMinutes} minutes</span>
            </div>
            <div className="types-container">
              <div className="type-content"> 
                <div className="type-heading">Dish: </div>
                  <div className="type-list">
                    {dishTypes && dishTypes.length > 0 ? dishTypes.map(dish =>(
                        <div className="type">{dish}</div>
                    )) : <div className="type">Not available</div>}
                  </div>
              </div>
              <div className="type-content"> 
                <div className="type-heading">Cuisine: </div>
                    <div className="type-list">
                    {cuisines && cuisines.length >0 ? cuisines.map(cuisine =>(
                        <div className="type">{cuisine}</div>
                    )) : <div className="type">Not available</div>}
                  </div>
              </div>
              <div className="type-content"> 
                <div className="type-heading">Diets: </div>
                    <div className="type-list">
                      {diets && diets.length>0 ? diets.map(diet =>(
                            <div className="type">{diet}</div>
                      )) : <div className="type">Not available</div>}
                  </div>
              </div>
            </div>
            <div className="sr-nutrition">
            {nutrition && nutrition.nutrients.map(nutrient => (
              <Fragment>
              {/*Selecting specific nutrients by name and mapping them to screen*/}
                {nutrient.name ==="Carbohydrates" || nutrient.name ==="Protein" ||
                nutrient.name ==="Fibre" || nutrient.name ==="Calories" ||
                nutrient.name ==="Fat" || nutrient.name ==="Sugar" || nutrient.name ==="Sodium" ? 
                <div className="nutritional-info" >
                {/*Pullin out carbohydrates and shortening name to 'Carbs' for display purposes*/}
                {nutrient.name==="Carbohydrates" ? <div className='nutrient nutrient-name'>Carbs</div> 
                : <div className='nutrient nutrient-name'>{nutrient.name}</div>
                }
                <div className='nutrient nutrient-amount'>
                {nutrient.amount}
                <span className="unit">{nutrient.unit}</span>
                </div>
                </div>
                : null}
              </Fragment>
            ))}
            </div>
          </div>
          <div className="img">
            <img src={image} alt={title}  className="sr-img" />
          </div>
      </div>
      <div className="sr-details">
        <div className="sr-ingredients">
            <h4>Ingredients</h4>
            <ul>
              {extendedIngredients && extendedIngredients.map((ingredient, index) => (
                <li key={ingredient.id+index}>{ingredient.original}</li>
              ))}
            </ul> 
          </div>
          <div className="sr-instructions">
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
