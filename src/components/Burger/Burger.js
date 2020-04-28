import React from 'react' ;
import classes from './Burger.module.css' ;
import BurgerIngredient from './BurgerIngredient/BurgerIngredent'

const burger = props => {
    let tranIngredients = Object.keys(props.ingredients)
        .map(igKey=>{
            return[...Array(props.ingredients[igKey])]
            .map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>  ;          
            })
        })
        .reduce((prev,next) => {
            return prev.concat(next)
        },[]);

        if(tranIngredients.length === 0) {
            tranIngredients = <p>Please add ingredients</p>
        }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {tranIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger ;