import React/*, { useState, useEffect }*/ from "react";
import "./App.css";

//import SearchForm from "./Components/SearchForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import axios from "axios";
import RecipeCard from "./Components/RecipeCard";
import HomePage from "./Components/HomePage";
import styled from "styled-components";

function App() {
const HomeDec = styled.div`
border: 5px dotted #20C8DD;
padding: 2%;
background-color: #7681A5;
padding: 3%;

align-items:center;

`;
  return (
  <header>
    <Router>
    <HomeDec>
    <Link to="/">Home</Link>
    <Link to="/recipecard"> recipe card</Link>
    </HomeDec>
   
    <Route exact path="/">
    <HomePage/>
    </Route>
    
    <Route exact path="/recipecard">
    <RecipeCard/>
    </Route>
    
    </Router>
  </header>
  )
}

export default App;
/*COLORS
#F4F7F6 WHITE
#7681A5 GRAY
#20C8DD BLUE
#AC3E59 POMEGRANTE
#191722 LIGHTBLACK
*/