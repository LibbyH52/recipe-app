import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './SingleRecipe.css'

const SingleRecipe = ({getRecipe, recipe}) => {
  const params = useParams();

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
    <div className="single-container">
    <div className="single-info">
        <h3 className="recipe-title">{title}</h3>
          <a href={sourceUrl}>{sourceName}</a>
              <span className="info servings">{servings}</span>
              <span className="info ready-time">{readyInMinutes}</span>
            <img src={image} alt={title}  className="single-img" />
     </div>
      <div className="recipe-details">
          <h4>Ingredients</h4>
          <ul>
             {/* {extendedIngredients.map(ingredient => (
              <li>{ingredient.original}</li>
          ))} */}
          {extendedIngredients.map(ingredient => (
              <li>{ingredient.original}</li>
            ))}
          </ul> 
          <h4>Instructions</h4>
          <p>       
            {instructions
              .replace('<ol>', '')
              .replace('</ol>', '')
              .replaceAll('<li>', ' ')
              .replace('</li>', '  ')
            }
          </p>
        </div>
    </div>
  )
}
export default SingleRecipe;
