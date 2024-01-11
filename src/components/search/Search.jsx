import React, { useState, useEffect } from 'react';
import useFetch from '../services/useFetch';

const Search = ({onSearchChange})=>{ 

        const [query, setQuery] = useState(null);
        const [datalist, setDatalist] = useState(null);


        function handleChange(e) {
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+e.target.value)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
                const recipes = data.meals;
                if(recipes !== null){
                    const optionItems = recipes.map((recipe) => <option key={recipe.idMeal}>{recipe.strMeal}</option> );
                    setDatalist(optionItems);
                }
            });

        }


        function handleSubmit(e){
            e.preventDefault();
            const searchQuery = e.target.elements.search.value;
            if(searchQuery !== null){
                setQuery(searchQuery);
                onSearchChange(searchQuery);
            }
        }



        return (
            <>
                <form className="search-form m-4 p-3" onSubmit={handleSubmit}>
                    <div className="form-outline">
                        <input type="search" name="search" id="form1" autoComplete="off" list="list-form1" className="form-control" onChange={handleChange} placeholder="Type search query" aria-label="Search" />
                        <datalist id="list-form1">
                            {datalist}
                        </datalist>
                    </div>
                </form>
            </>
        );
    }
 
export default Search;