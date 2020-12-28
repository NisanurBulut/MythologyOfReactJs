import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  // const exampleReq="";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APP_ID = '826fdf36';
  const APP_KEY = 'ee1e5c1e15df89e2112c782a65dcc120';
  // const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const exampleReq="";
  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch=(e)=>{
    e.preventDefault();
    setQuery(search);
  }
  const getRecipes = async () => {
    var response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map((item) => (
        <Recipe
          key={item.recipe.label}
          title={item.recipe.label}
          calories={item.recipe.calories}
          image={item.recipe.image}
          ingredients={item.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};
export default App;
