import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav"
import Posts from "./components/posts/Posts"
import Footer from "./components/footer/Footer";
import Search from "./components/search/Search";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SingleRecipe from "./components/singleRecipe/SingleRecipe";
import React, { Component, useState, useEffect, useContext } from 'react';

function App() {

  const [posts, setPosts] = useState(null);

  useEffect( () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        const recipes = data.meals;
        setPosts(recipes);
    });
  }, []);

    const handleSearchChange = (data) => {
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+data)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          const recipes = data.meals;
          setPosts(recipes);
      });
    }

    const handleCategoryChange = (data) => {
      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+data)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          const recipes = data.meals;
          setPosts(recipes);
      });
    }

  return (
    <div className="container">
      <Router>
        <Nav onCategoryChange={handleCategoryChange}/>
          <Routes>
            <Route path="/" element={[<Header key={'header'}/>, <Search key={'search'} onSearchChange={handleSearchChange}/>, <Posts key={'posts'} posts={posts}/>]}/>
            <Route path="/post/:id" element={<SingleRecipe/>}/>
          </Routes>
        <Footer/> 
      </Router>
      
    </div>
  );
}

export default App;
