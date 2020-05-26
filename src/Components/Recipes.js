import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import styled from "styled-components";
import { Button } from "@material-ui/core";

function Recipes(props) {
  // console.log('friends props: ', props)
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/")
      .then((res) => {
        setRecipes(res.data);
      });
  }, []);

  function delRecipe(e, id) {
    e.preventDefault();
    console.log("deleting");
    axiosWithAuth()
      .delete(`recipes/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log("delete error ", err))
      .finally(() => window.location.reload());
  }

  // console.log("friends from api ", friends);

  return (
    <RecipesContainer>
      <h2>Your Recipes</h2>
      {recipes
        ? recipes.map((recipe) => (
            <RecipeContainer key={recipe.id}>
              <p>
                Title: {recipe.name}
                <br />
                Ingredients: {recipe.age}
                <br />
                Instructions: {recipe.email}
              </p>
              <Button
                onClick={(e) => delRecipe(e, recipe.id)}
                variant="contained"
                color="primary"
              >
                delete
              </Button>
            </RecipeContainer>
          ))
        : "loading"}
    </RecipesContainer>
  );
}

const RecipesContainer = styled.div`
  position: relative;
  top: -200px;
`;

const RecipeContainer = styled.div`
  padding: 15px;
  margin: 15px;
  background-color: smokewhite;
  border: black 1px solid;
  text-align: center;
`;

export default Recipes;
