import React from 'react'
import {Link} from 'react-router-dom'
//Recipe prop is being passed in, so should add it to 'prop types';
import PropTypes from 'prop-types'
import './RecipeItem.css'

const RecipeItem = ({recipe: {image, title, id}}) => {

  return (
    <Link to={`/SingleRecipe/${id}`}>
    <div className="recipe-card">
      <div className="img-container">
      {image ? 
        <img src={image} alt={title} className="recipe-img" />
        : <h5 className="missing-img">{title}</h5>
      }
      </div>
      <div className="title-container">
        <h4 className="recipe-title">{title}</h4>
      </div>
    </div>
    </Link>
  )
}
RecipeItem.propTypes= {
  //RecipeItem being passed in is an object
  recipe: PropTypes.object.isRequired,
}
export default RecipeItem;
