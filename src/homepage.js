import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

//import Header from "./Components/Header";
//import SearchForm from "./SearchForm";
import styled from "styled-components";
//import "./Components/Recipes";

function HomePage(){

  const Page = styled.div`
    background-color: #7681A5;
  `;

  const [recetas, setRecetas] = useState([]);

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
  })*/
    return(
      <Page>
      { /* <SearchForm value={search} onChange={handleChange} />
        <button>Go!</button>
        /*{result.map((recipes) => {
            return <
        })}*/}
        <form input="text" placeholder="Search"></form>
        </Page>
        
    )
}

export default HomePage;
  