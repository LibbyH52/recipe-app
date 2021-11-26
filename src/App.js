import React, {useState, useEffect, Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import axios from 'axios';
import About from './components/About';
import Recipes from './components/Recipes';
import SingleRecipe from './components/SingleRecipe';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async() => {
      const results = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&limitLicense=true&maxReadyTime=59&number=12&sortDirection='desc'`);
      setRecipes(results.data.recipes);
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

  const getSingleRecipe = (id) => {
    console.log(id);
  }

  return (
    <Router>
        <Navbar />
        <div className="main-container">
        <Routes>
          <Route exact path='/' element={
              <About />
          }/>
          <Route exact path='/Recipes' element={
            <div className="main-content">
                <Search searchRecipes={searchRecipes}/>
                <Recipes recipes={recipes} />
            </div>
          } />
           <Route exact path='/SingleRecipe' element={<SingleRecipe/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
