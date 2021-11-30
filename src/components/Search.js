import React, {useState} from 'react'
import './Search.css'
import PropTypes from 'prop-types'

const Search = ({find, searchRecipes}) => {
  const [recipeName, setRecipeName] = useState('');

  const handleChange = e => {
    setRecipeName(e.target.value);
  }

  const handleSubmit = e => {
      e.preventDefault();
      searchRecipes(recipeName)
      setRecipeName('');
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="form">
        <input 
            type="text" 
            name="text"
            value={recipeName} 
            onChange={handleChange}
            placeholder="Search Recipes..." 
            className="search"
        />
        <button type="submit" 
          className="btn btn-search">
          <span className="icon">
            <i className={find} />
          </span>
        </button>
      </form>
    </div>
  )
}

Search.prototypes = {
  Search: PropTypes.func.isRequired,
  find: PropTypes.string.isRequired
}

Search.defaultProps = {
  find: 'fas fa-search'
}

export default Search;
