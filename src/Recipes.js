import React, { Component } from 'react'
import style from './recipe.module.css'
export default class Recipes extends Component {
    render() {
        const { title, calories, img, ingredient } = this.props
        return (
            <div className={style.recipe} >
                <h1>Title: {title}</h1>
                <ol>
                    {ingredient.map(e => (
                        <li>{e.text}</li>
                        ))}
                </ol>
                        <p>Calories: {calories}</p>
                <img src={img} alt="" className={style.image} />
            </div>
        )
    }
}
