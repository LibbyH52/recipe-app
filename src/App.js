import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Recipes from './components/Recipes';
import Search from './components/Search';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async() => {
      const results = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&limitLicense=true&maxReadyTime=59&number=12&sortDirection='desc'`);
      setRecipes(results.data.results);
      console.log(results.data.results);
    }
    fetchRecipes();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
          <Search />
          <Recipes recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
