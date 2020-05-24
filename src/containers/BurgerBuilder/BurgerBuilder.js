import React,{Component} from 'react' ;
import Aux from '../../hoc/Auxillary' ;
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/ui/Modal/Modal' ;
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary' ;
import axios from  '../../axios-orders.js'
import Spinner from '../../components/ui/Spinner/Spinner' ;
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
        purchasing:false,
        loading:false
    }

    componentDidMount() {
        axios.get('https://react-sree-burger.firebaseio.com/ingredients.json')
        .then(res=> {
            this.setState({ingredients:res.data}) ;
        })
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
        console.log("oldCount  .." +oldCount );
        const updatedCount = oldCount + 1 ;
        console.log("updatedCount  .." +updatedCount);
        const updatedIngredient = {... this.state.ingredients} ;
        updatedIngredient[type] = updatedCount ;
        const priceAddition = INGREDIENT_PRICE[type];
       // console.log("priceAddition .." +priceAddition) ;
        const oldPrice = this.state.totalPrice ;
        console.log("oldPrice .." +oldPrice) ;
        const totalPrice = priceAddition + oldPrice ;
        console.log("totalPrice .." +totalPrice) ;
        this.setState({ingredients: updatedIngredient})
       // this.setState({ingredients :updatedIngredient,totalPrice:totalPrice});
        console.log("state ingredients  .." +this.state.ingredients['salad'] );
        console.log("updatedIngredient  .." +updatedIngredient['salad'] );
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
        console.log("state ingredients after removal .." +this.state.ingredients['salad'] );
        this.updatePuchaseState(updatedIngredient);

    }

    purchaseHandler =  () => {
        this.setState({purchasing:true}) ;
    }

    purchaseCancelHandler =  () => {
        this.setState({purchasing:false}) ;
    }

    purchaseContinueHandler =  () => {
        this.setState({loading:true}) ;

        const orders = {
            ingredients : this.state.ingredients ,
            price: this.state.totalPrice ,
            customer : {
                name : 'sreeraj',
                address : {
                    street: 'street 1' ,
                    zipCode:'435565',
                    country:'India'
                },
                email:'sree.valapil@gmail.com'
            },
            deliveryMethod:'fastest'
        }
        axios.post('/orders.json',orders)
            .then(response=> {
                this.setState({loading : false, purchasing:false}) ;
            })
            .catch(error => { 
                this.setState({loading : false, purchasing:false}) ;
            })
        
    }

    render() {
        const disabledInfo = {... this.state.ingredients};
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0 ;
        }

        let orderSummary =  <OrderSummary ingredients={this.state.ingredients}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice}></OrderSummary> ; 

        if(this.state.loading) {
            orderSummary = <Spinner/> ;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
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

export default withErrorHandler(BurgerBuilder,axios) ;