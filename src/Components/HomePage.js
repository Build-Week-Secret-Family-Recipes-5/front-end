import React, { useState, useEffect } from "react";

import axios from "axios";

import SearchForm from "./SearchForm";

import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const Heading = styled.h1`
  color: #AC3E59;
  
`;

function HomePage() {
//KEEP
  const [recetas, setRecetas] = useState([])

  const [search, setSearch] = useState("");

 // KEEP 
 useEffect(() => {
    axios.get("https://cors-anywhere.herokuapp.com/https://back-end-build-weeks.herokuapp.com/api/recipes").then(response =>{
      console.log(response.data);
      setRecetas(response.data)
    });
  }, []);
 
  
    const handleChange = event => {
    setSearch(event.target.value);
  };

    const result = recetas.filter(receta => {
    return receta.title.toLowerCase().includes(search);  
  });

 return (
   <div>
  <center><Heading>Secret Recipes</Heading></center>
  
  <center><SearchForm value={search} onChange={handleChange}/></center>
  {result.map(props => {
          return (
          <RecipeCard 
          title= {props.title}
          ingredients={props.ingredient}
          instructions={props.instructions}
          source={props.source}
          category={props.category}
          photo={props.photo}
          />
          )
      })}
  </div>
 )}


export default HomePage;

  
    

    /*const result = /*"variable luke chose that filters the api".filter(names => {
    return names.name.toLowerCase().includes(search);
  })
  return(
    <Page>
    { /* <SearchForm value={search} onChange={handleChange} />
      <button>Go!</button>
      /*{result.map((recipes) => {
          return <
      })}
      <form input="text" placeholder="Search"></form>
      </Page>
      
  )
}

export default HomePage;

{/* <SearchForm value={search} onChange={handleChange} />
      {result.map((recipes) => {
          return <
      })}

       /*const [recipes, setRecipes] = useState([])

  const [search, setSearch] = useState("");

  const handleChange = event => {
  setSearch(event.target.value);
};

  const result = /*"variable luke chose that filters the api".filter(names => {
  return names.name.toLowerCase().includes(search);
})*/
