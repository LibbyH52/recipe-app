import React, {useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import axios from 'axios';
import About from './components/About';
import Recipes from './components/Recipes';
import SingleRecipe from './components/SingleRecipe';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeState from './context/recipe/RecipeState';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async() => {
      const results = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&limitLicense=true&maxReadyTime=59&number=12&sortDirection='desc'`);
      setRecipes(results.data.recipes);
      setIsLoading(false);
    }
    fetchRecipes();
  }, [])

  const searchRecipes = (recipeName) => {
    const getRecipes = async() => {
    const results = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&limitLicence=true&maxReadyTime=59&number=12`)
    setRecipes(results.data.results);
    }
    getRecipes();
  }

  const getRecipe = async (id) => {
    const results = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`)
    //setRecipe(results);
    setRecipe(results.data);
    }

  return (
    <RecipeState>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={
                <About />
            }/>
            <Route exact path='/Recipes' element={
              <div className="content-container">
                  { isLoading && <div>Loading...</div> }   
                  <Search searchRecipes={searchRecipes}/>
                  <Recipes recipes={recipes} />        
              </div>
            } />
          <Route 
              exact path='/SingleRecipe/:id' 
              element={
                <SingleRecipe 
                  getRecipe={getRecipe} 
                  recipe={recipe}
                />
                }
            />
          </Routes>
        <Footer />
      </Router>
    </RecipeState>
  );
}

export default App;
