import React, { Component } from 'react';
import heroImg from "../../img/chris-ralston-09HGdZzkP-Q-unsplash 1.png";

const Header = ()=>{ 
        return (
            <>
            <div className="container col-xxl-10 px-4 py-5">
                <div className="row align-items-center g-5 py-5">
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Cooking Made Fun and Easy: Unleash Your Inner Chef</h1>
                    <p className="lead">Discover more than 10,000 recipes in your hand with the best recipe. Help you to find the easiest way to cook.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" onClick={ ()=> { document.getElementById("recipesgit i").scrollIntoView({behavior: 'smooth'}) }} className="btn btn-primary btn-lg px-4 me-md-2">Explore Recipes</button>
                    </div>
                </div>
                <div className="col-10 col-sm-8 col-lg-6 text-center">
                    <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="img" width="700" height="500" loading="lazy"/>
                </div>
                </div>
            </div>
            </>
        );
    }
 
export default Header;