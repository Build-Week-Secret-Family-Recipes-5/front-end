import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import '../index.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  // let {id} = useParams();

  useEffect(() => {
    axios
      .get(`https://back-end-build-weeks.herokuapp.com/api/recipes`)
      .then(res => {
        setRecipes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(recipes);

  return (
    <>
      <NavBar />
      <div className="button-box">
        <Link to="/recipeform">
          <button className="dash-button">Add A New Recipe</button>
        </Link>
      </div>
      <div className="recipes-box">
        {recipes.map(recipe => {
          return <RecipesList recipe={recipe} />;
        })}
      </div>
    </>
  );
};

const RecipesList = ({ recipe }) => {
  const {
    title,
    source,
    ingredients,
    instructions,
    category,
    photo_url,
  } = recipe;
  return (
    <div >
      <img src={photo_url} />
      <h1>Recipe Name: {title}</h1>
      <h3>
        Title: {title}
      </h3>
      <h4 >Source: {source}</h4>
      <h4>Category: {category}</h4>
      <h4>
        Ingredients: {ingredients}
      </h4>
      <h4 className="recipe-header">
        Instructions: {instructions}
      </h4>
    </div>
  );
};

export default Dashboard;
