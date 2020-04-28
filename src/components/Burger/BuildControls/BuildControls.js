import React from 'react';
import classes from './BuildControls.module.css' ;
import BuildControls from './BuildControl/BuildControl';


const controls = [
    {label:"Salad",type:"salad"} ,
    {label:"Bacon",type:"bacon"} ,
    {label:"Meat",type:"meat"} ,
    {label:"Cheese",type:"cheese"} ,

];

const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current price : {props.price}</p>
        {controls.map(control => {
            return <BuildControls   
            key={control.label} 
            label={control.label}
            added={() => props.ingredientAdded(control.type)}
            removed={() => props.ingredientRemoved(control.type)}
            disabled={props.disabled[control.type]}>
            </BuildControls> ;
        })}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.orderded}>Order Now      

        </button>

    </div>
);

export default buildControls;