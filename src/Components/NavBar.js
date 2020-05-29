import React/*, { useState, useEffect }*/ from "react";

import { Route, Link } from "react-router-dom";

import styled from "styled-components";


function NavBar() {
//styles 
  const NavDec = styled.div`
    border: 4px solid #AC3E59;
    text-align: center;
    background-color: #191722;
    padding: 1%;
    
  `;

  const DecoA = styled.a`
    padding: 2%;
    text-decoration: none;
  
  `;

//nav bar
//links for 
 /*const [recipes, setRecipes] = useState([])

    const [search, setSearch] = useState("");
  
    const handleChange = event => {
    setSearch(event.target.value);
  };

    const result = /*"variable luke chose that filters the api".filter(names => {
    return names.name.toLowerCase().includes(search);
  })*/


    return (
        <NavDec>
       {/* <SearchForm value={search} onChange={handleChange} />
        {result.map((recipes) => {
            return <
        })}*/}
            <div>
              <ul id="nav">
                <DecoA href="">Home</DecoA>
                <DecoA href="">Add</DecoA>
                <DecoA href="">Edit</DecoA>
              </ul>
            </div>   
        </NavDec>
        );
}

export default NavBar;