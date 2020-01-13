import React, { useEffect, useState } from 'react';
import './App.css';
import Recipes from './Recipes'
const App = () => {

    const APP_ID = '0795c735'
    const APP_KEY = '9dd46b7312a2bda4634931fd8cd9847f'

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('vegetable');

    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <div className="App">
            <form className="search-form" onSubmit={getSearch} >
                <input type="text" className="search-bar" value={search} onChange={updateSearch} />
                <button type="submit" className="search-button" >Search</button>
            </form>
            <div className="recipe" >
                {recipes.map(recipe => (
                    <Recipes
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        img={recipe.recipe.image}
                        ingredient={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
