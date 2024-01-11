import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

const Post = ({post})=>{ 

        return (
                <div key={post.idMeal} className="col-lg-3">
                    <div className="card p-1 m-1">
                        <img src={post.strMealThumb} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{post.strMeal}</h5>
                            <p className="card-text">{post.strTags && post.strTags}</p>
                            <Link to={`/post/${post.idMeal}`} className="btn btn-primary">View Recipe</Link>
                        </div>
                    </div>
                </div>
        );
    }
 
export default Post;