import React from 'react'
import {Link} from 'react-router-dom'
//Recipe prop is being passed in, so should add it to 'prop types';
import PropTypes from 'prop-types'
import './RecipeItem.css'

const RecipeItem = ({recipe: {image, title, id}}) => {

  // const handleClick = e => {
  //   getSingleRecipe(id);
  // }

  return (
    <div className="recipe-card">
    <Link to={`/SingleRecipe/${id}`}>
      <img src={image} alt={title} className="recipe-img" />
      <h4>{title}</h4>
    </Link>
    </div>
  )
}
RecipeItem.propTypes= {
  //RecipeItem being passed in is an object
  recipe: PropTypes.object.isRequired,
}
export default RecipeItem;
