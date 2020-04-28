import React from 'react' ;
import Aux from '../../../hoc/Auxillary';
import Button from '../../ui/Button/Button' ;

const orderSumamry = props =>  {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey=> {
        return <li key={igKey}><span style= {{textTransform:'capitalize'}}>
            {igKey}:{props.ingredients[igKey]}</span></li>
        })

    return(
    <Aux>
        <h3>Order Sumamry</h3>
        <p>A burger with following Ingredients : </p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p><strong>Total Price: {props.price}</strong></p>
        <p>Countinue to checkout </p>
        <Button buttonType = "Danger" clicked={props.purchaseCancelled}>Cancel</Button>
        <Button buttonType= "Success" clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
);

}

export default orderSumamry ;