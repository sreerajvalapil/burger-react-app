import React ,{Component} from 'react' ;
import Aux from '../../../hoc/Auxillary';
import Button from '../../ui/Button/Button' ;

class OrderSumamry extends Component {
    
   
    componentWillUpdate() {
    }

    render() {
        let ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey=> {
        return(
            <li key={igKey}>
                <span style= {{textTransform:'capitalize'}}>
                    {igKey}:  {this.props.ingredients[igKey]}
                </span>
            </li>
            )
        }) ;
        return(
            <Aux>
                <h3>Order Sumamry</h3>
                <p>A burger with following Ingredients : </p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Countinue to checkout </p>
                <Button buttonType = "Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button buttonType= "Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );        

    }
}



export default OrderSumamry ;