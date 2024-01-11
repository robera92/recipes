import React, { Component, useState, useEffect } from 'react';
import Post from '../post/Post';



const Posts = ({posts})=>{

        //console.log(posts);

         const listPosts = posts && posts.map( (post) =>
             <Post key={post.idMeal} post={post}/>
         );


       /// const listPosts = <h1>Postai</h1>;

        return (
            <>
                <div className="container">
                    <h2 id="recipes">Recipes</h2>
                    <div className="row">
                        {listPosts}
                    </div>
                </div>
            </>
        );
    }
 
export default Posts;