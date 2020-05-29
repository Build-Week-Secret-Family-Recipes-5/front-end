import React, { useState, useEffect } from "react";
import "./App.css";

import NavBar from "./Components/NavBar";
import SearchForm from "./Components/SearchForm";

import styled from "styled-components";
import axios from "axios";

function App(prop) {
  return (
    <div>
    <NavBar />
    <SearchForm value={search} onChange={handleChange} />
   
    </div>
  )
}

export default App;
/* const Page = styled.div`
    background-color: #7681A5;
  `;

  useEffect(() => {
    axios.get("https://back-end-build-weeks.herokuapp.com/api/recipes").then(response =>{
      console.log(response);
      //setRecetas(response.data.results)
    });
  }, []);
/*
    const [search, setSearch] = useState("");
  
    const handleChange = event => {
    setSearch(event.target.value);
  };

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
