import React, {useEffect, Fragment} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './SingleRecipe.css'

const SingleRecipe = ({getRecipe, recipe}) => {
  const params = useParams();
  const goBack=useNavigate();
  console.log(goBack)

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

      } = recipe;


  return (
    <Fragment>
    <button className="btn-back" onClick={() => goBack('/recipes')}>Back to Search</button>
    <div className="single-container">
      <div className="single-header">
        <div className="single-info">
            <h3 className="sr-title">{title}</h3>
            <p className="acknowledge">
              &copy; <a href={sourceUrl}>{sourceName}</a>
            </p>
            <span className="info servings">Serves: {servings}</span>
            <span className="info ready-time">Ready In: {readyInMinutes} minutes</span>
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
            <p className="instruction-paragraph">       
              {instructions && instructions
              .replaceAll('<li>', '')
              .replaceAll('</li>', '')
              .replace('<ol>', '')
              .replace('</ol>', '')
              }
            </p>
          </div>
        </div>
    </div>
    </Fragment>
  )
}
export default SingleRecipe;
