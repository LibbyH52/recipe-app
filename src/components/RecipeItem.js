import React from 'react'
//Recipe prop is being passed in, so should add it to 'prop types';
import PropTypes from 'prop-types'
import './RecipeItem.css'

const RecipeItem = ({recipe: {image, title}}) => {

  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-img" />
      <h4>{title}</h4>
    </div>
  )
}
RecipeItem.propTypes= {
  //RecipeItem being passed in is an object
  recipe: PropTypes.object.isRequired,
}
export default RecipeItem;
