import React, { Component, useState, useEffect } from 'react';
import logo from "../../img/logo.png";
import { FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BrowserRouter as Router,Route,Routes, useParams } from "react-router-dom";

const Nav = ({onCategoryChange})=>{ 

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            setCategories(data.categories);
        });
    }, []);


    const handleCategoryChange = (id)=>{
        onCategoryChange(id);
    }

    const listItems = categories.map((category) =>
            <li key={category.idCategory}><a className="dropdown-item" onClick={() => handleCategoryChange(category.strCategory)}>{category.strCategory}</a></li>
        );

        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul className="dropdown-menu">
                            {listItems}
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Community</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <FaUser/>
                        <FaSearch/>
                    </span>
                    </div>
                </div>
            </nav>
        );
    }
 
export default Nav;