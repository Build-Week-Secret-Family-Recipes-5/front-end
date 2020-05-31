import React from "react";

const RecipeCard = props => {

    return (
        <div className="recipecard">
            
            <h2>{props.title}</h2>
            <p>Ingredients:{props.ingredient}</p>
            <p>Instructions:{props.instructions}</p>
            <p>Source:{props.source}</p>
            <p>Category:{props.categories}</p>
            <img alt="food" src={props.photo}/>
            <button>Edit</button>
            <button>Delete</button>
            
        </div>
    )
}
//also add delete button
export default RecipeCard;