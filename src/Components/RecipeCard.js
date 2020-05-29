import React from "react";

const RecipeCard = props => {

    return (
        <div className="recipecard">
            <li>
            <h2>{props.title}</h2>
            <p>Ingredients:{props.ingredient}</p>
            <p>Instructions:{props.instructions}</p>
            <p>Source:{props.source}</p>
            <p>Category:{props.categories}</p>
            <img alt="food" src={props.photo}/>
            </li>
        </div>
    )
}

export default RecipeCard;