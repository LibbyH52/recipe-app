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
      <img src={image} alt={title} className="recipe-img" />
    </div>
      <h4 className="recipe-title">{title}</h4>
    </div>
    </Link>
  )
}
RecipeItem.propTypes= {
  //RecipeItem being passed in is an object
  recipe: PropTypes.object.isRequired,
}
export default RecipeItem;
