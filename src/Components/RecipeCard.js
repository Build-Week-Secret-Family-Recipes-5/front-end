import React from "react";
import styled from "styled-components";

const FixImg = styled.img`
    height:80%;
    width:80%
    align-item: center;   
`;
const CardDiv = styled.div`
    color:#20C8DD;
    border: 2px dotted #F4F7F6;
    width:75%;
    height:75%;
    padding:3%;
    margin:4%;
    
`;

const Button = styled.button`
   color:#F4F7F6;

`;
const RecipeCard = props => {

    return (
        <CardDiv className="recipecard">
            
            <h2>{props.title}</h2><button>Edit</button>
            <button>Delete</button>
            <p>Ingredients: {props.ingredient}</p>
            <p>Instructions: {props.instructions}</p>
            <p>Source: {props.source}</p>
            <p>Category: {props.category}</p>
            <FixImg alt="food" src={props.photo}/>

        </CardDiv>
    )
}
//also add delete button
export default RecipeCard;