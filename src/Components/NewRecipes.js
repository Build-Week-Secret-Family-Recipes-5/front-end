import React, { useState } from "react";
import { axiosWithAuth } from "../utill/axiosWithAuth";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

function NewRecipes(props) {
  const [input, setInput] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    id: Date.now(),
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const add = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/`, input)
      .then((res) => {
        console.log("res ", res);
        props.history.push("/");
      })
      .catch((err) => {
        console.log("error login: ", err);
      });
  };

  return (
    <NewRecipesContainer>
      <h2>Add a New Recipes</h2>
      <form onSubmit={add}>
        <TextField
          type="text"
          name="title"
          label="title"
          value={input.title}
          onChange={handleChange}
        />
        <br />
        <TextField
          type="text"
          name="ingredients"
          label="ingredients"
          value={input.ingredients}
          onChange={handleChange}
        />
        <br />
        <TextField
          type="text"
          name="instructions"
          label="instructions"
          value={input.instructions}
          onChange={handleChange}
        />
        <br />
        <Button
          className="new-recipes-btn"
          variant="contained"
          color="primary"
          type="submit"
        >
          Add New Recipes
        </Button>
      </form>
    </NewRecipesContainer>
  );
}

const NewRecipesContainer = styled.div`
  position: relative;
  top: -200px;

  .new-recipes-btn {
    margin: 10px 0px;
  }
`;

export default NewRecipes;
