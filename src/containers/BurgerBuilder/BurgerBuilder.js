import React,{Component} from 'react' ;
import Aux from '../../hoc/Auxillary' ;
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/ui/Modal/Modal' ;
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary' ;

const INGREDIENT_PRICE = {
    salad:0.5,
    cheese:1,
    meat:2.5,
    bacon:3.8
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad:0,
            meat:0,
            bacon:0,
            cheese:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    }
    updatePuchaseState  (ingredients) {
        const sum = Object.keys(ingredients)
                    .map(igKey=> {
                        return ingredients[igKey]
                    })
                    .reduce((sum,ele) => {
                        return sum + ele ;
                    },0);
        this.setState({purchasable :sum > 0}) ;
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1 ;
        const updatedIngredient = {... this.state.ingredients} ;
        updatedIngredient[type] = updatedCount ;
        const priceAddition = INGREDIENT_PRICE[type];
        console.log("priceAddition .." +priceAddition) ;
        const oldPrice = this.state.totalPrice ;
        console.log("oldPrice .." +oldPrice) ;
        const totalPrice = priceAddition + oldPrice ;
        console.log("totalPrice .." +totalPrice) ;
        this.setState({totalPrice:totalPrice ,ingredients :updatedIngredient});
        this.updatePuchaseState(updatedIngredient);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0) {
            return;
        }
        const updatedCount = oldCount - 1 ;
        const updatedIngredient = {... this.state.ingredients} ;
        updatedIngredient[type] = updatedCount ;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice ;
        const totalPrice =  oldPrice - priceDeduction ;
        this.setState({totalPrice:totalPrice ,ingredients :updatedIngredient});
        this.updatePuchaseState(updatedIngredient);

    }

    purchaseHandler =  () => {
        this.setState({purchasing:true}) ;
    }

    purchaseCancelHandler =  () => {
        this.setState({purchasing:false}) ;
    }

    purchaseContinueHandler =  () => {
        alert('You conitnue ');
    }

    render() {
        const disabledInfo = {... this.state.ingredients};
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0 ;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice}></OrderSummary>
                </Modal>
               <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    orderded={this.purchaseHandler}>
                </BuildControls>
            </Aux>
        )
    }
}

export default BurgerBuilder ;