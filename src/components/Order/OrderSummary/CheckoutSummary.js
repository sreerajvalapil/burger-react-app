import React,{Component} from 'react' ;
import Button from '../../ui/Button/Button' ;
import Burger from '../../Burger/Burger';

const checkoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1> Wee hope it taste well</h1>
            <div style={{width:'300px', height:'300px', margin:'auto'}}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button buttonType="Danger" clicked>CANCEL</Button>
            <Button buttonType="Success">CONTINUE</Button>
        </div>

    ) ;
}

export default CheckoutSummary;