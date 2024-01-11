import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router,Route,Routes, useParams } from "react-router-dom";

const SingleRecipe = ()=>{ 
    const params = useParams();

    const recipeId = params.id;

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {

      fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+recipeId)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            const recipe = data.meals[0];
            setRecipe(recipe);
        });
    }, []);


        return (
            <div className="m-4 p-3 row flex-lg-row-reverse align-items-center">
            <div className="col-sm-6">
                <img src={recipe.strMealThumb} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-sm-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">{recipe.strMeal}</h1>
                <p className="lead">{recipe.strInstructions}</p>
            </div>
            </div>
        );
    }
 
export default SingleRecipe;

