import React from 'react'
import {Link} from 'react-router-dom'
//Recipe prop is being passed in, so should add it to 'prop types';
import PropTypes from 'prop-types'
import './RecipeItem.css'

const RecipeItem = ({recipe: {id, image, title, readyInMinutes}, clock}) => {
  
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
        <p className="ready-time">
          <span className="icon">
              <i className={clock} />
          </span>
           {readyInMinutes ? `${readyInMinutes} minutes` :
           <span>less than 1 hour</span>}
        </p>
      </div>
    </div>
    </Link>
  )
}
RecipeItem.propTypes= {
  //RecipeItem being passed in is an object
  recipe: PropTypes.object.isRequired,
  clock: PropTypes.string.isRequired
}

RecipeItem.defaultProps = {
  clock: 'far fa-clock'
}

export default RecipeItem;
