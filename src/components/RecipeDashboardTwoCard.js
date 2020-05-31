import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

export default function RecipeDashboardTwoCard(props) {
  const [recipeCard, setRecipeCard] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`https://back-end-build-weeks.herokuapp.com/api/recipes${id}`)
      .then(response => {
        setRecipeCard(response.data);
        console.log(recipeCard);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const {
    title,
    source,
    ingredients,
    instructions,
    category,
    photo_url,
  } = setRecipeCard;
  console.log(setRecipeCard);
  return (
    <>
      <NavBar />
      <div className="recipe-box">
        <img className="recipe-photo" src={photo_url} />
        <h1 className="recipe-header">Recipe Title: {title}</h1>
        <h4 className="recipe-header">Source: {source}</h4>
        <h4 className="recipe-header">Ingredients: {ingredients}</h4>
        <h4 className="recipe-header">
          Instructions: {instructions}
        </h4>
        <h4 className="recipe-header">
          Category: {category}
        </h4>
      </div>
    </>
  );
}
