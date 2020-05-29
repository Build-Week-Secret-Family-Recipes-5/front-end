import React/*, { useState, useEffect }*/ from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const NavDec = styled.div`
border: 4px solid #AC3E59;
text-align: center;
background-color: #7681A5;
padding: 1%;

`;

const DecoA = styled.a`
padding: 2%;
text-decoration: none;

`;

function NavBar() {
//styles 
 

    return (
        <NavDec>
          <ul id="nav">
            <DecoA href="">Home</DecoA>
            <DecoA href="">Add</DecoA>
            
          </ul>  
        </NavDec>
        );
}

export default NavBar;