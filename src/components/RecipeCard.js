import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
//****style components*****

const StyledHeading = styled.h1`
  color: #7681a5;
  font-weight: 300;
  margin-bottom: 30px;
`;

const FieldInputs = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: #191722;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 10px;
  margin-top: 10px;
`;

const TextInputs = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: none;
  color: #191722;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: 1em;
  font-weight: 400;
  padding-top: 100px
  padding-bottom: 0px;
  margin-top: 20px;
  resize: none;
  font-family: "Roboto", sans-serif;
`;

const RecipeForm = styled.form`
  width: 50%;
  background-color: #f4f7f6;
  padding: 20px 70px 20px 70px;
  overflow-x: hidden;
  margin: 0 auto;
  border-radius: 10px;
`;

const FormButton = styled.button`
  background-color: #20c8dd;
  color: #f4f7f6;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 15px 32px;
  font-size: 0.9em;
  font-weight: 500;
  margin-left: 90px;
  margin-top: 20px;
`;

const FormWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 960px;
`;

function RecipeCard() {
  //state
  const [recipeState, setRecipeState] = useState({
    recipe: "",
    source: "",
    category: "",
    ingredients: "",
    directions: "",
  });

  const [postReq, setPostReq] = useState([]);

  const handleRecipeCardSubmission = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log("submitted!");
    axios
      .post("https://back-end-build-weeks.herokuapp.com/api/", recipeState)
      .then((res) => {
        setPostReq(res.data);
        console.log("Recipes", res);
      })
      .catch((err) => console.log(err));
  };

  //onChange func
  const inputChange = (e) => {
    e.persist();

    console.log("change", e.target.value);
    setRecipeState({ ...recipeState, [e.target.name]: e.target.value });
  };
  return (
    <FormWrapper>
      <RecipeForm onSubmit={handleRecipeCardSubmission}>
        <StyledHeading>Recipe</StyledHeading>

        <FieldInputs
          type="text"
          name="recipe"
          id="recipe"
          value={recipeState.value}
          onChange={inputChange}
          placeholder="Enter Recipe"
        />

        <FieldInputs
          type="text"
          name="source"
          id="source"
          value={recipeState.source}
          onChange={inputChange}
          placeholder="Enter Source"
        />

        <FieldInputs
          type="text"
          name="category"
          id="category"
          value={recipeState.category}
          onChange={inputChange}
          placeholder="Recipe Type"
        />

        <TextInputs
          type="text"
          name="ingredients"
          id="ingredients"
          value={recipeState.ingredients}
          onChange={inputChange}
          placeholder="List Ingredients"
        />

        <TextInputs
          name="directions"
          id="directions"
          value={recipeState.directions}
          onChange={inputChange}
          placeholder="Directions"
        />

        <FormButton submit="button">Submit Recipe</FormButton>
      </RecipeForm>
    </FormWrapper>
  );
}

export default RecipeCard;
