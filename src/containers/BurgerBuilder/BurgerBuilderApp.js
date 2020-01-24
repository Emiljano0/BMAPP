import React from 'react'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandlerApp'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import Aux from '../../hoc/AuxDir/Aux'
import Modal from '../../components/UI/Modal/ModalApp'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummaryApp'
import Burger from '../../components/Burger/BurgerApp'
import BuildControls from '../../components/Burger/BuildControls/BuildControlsApp'
import Spinner from '../../components/UI/Spinner/SpinnerApp'


class BurgerBuilder extends React.Component {

    state = {
        purchasingState: false,
        loading: false,
        error: false
    }

    componentDidMount(){
        // axios.get('https://burgermaker-7b43b.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data})
        //     })
        //     .catch(error => { this.setState({error: true}) })
    }

    updatePurchaseHandler = (ingredients) => {
        const sum = Object.keys(ingredients).map( ingrKey => {
            return ingredients[ingrKey]
        }).reduce((sum, element) => { return sum + element }, 0)
        return sum > 0
        // console.log(Object.keys(updatedIngredients).map( ingrKey => {
        //     return updatedIngredients[ingrKey]}), ' : sum')
        // console.log('REDsum : ', sum)
        // console.log('YEEEA')
    }

    purchasingStateHandler = () => {
        this.setState({purchasingState: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasingState: false})
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout')
    }

    render(){

        const disabledInfo = { ...this.props.ingredientsProp }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 
        }
        
        let orderSummary = null 
        let burger = this.state.error ? <p> Ingredients can't be loaded</p> : <Spinner />
        if(this.props.ingredientsProp){
            burger = (
                <Aux>
                    <Burger burgerIngredients={this.props.ingredientsProp} />
                    <BuildControls 
                        addIngredientButton={this.props.onIngredientAdded} 
                        removeIngredientButton={this.props.onIngredientRemoved}    
                        disabled={disabledInfo}
                        price={this.props.totalPriceProp}
                        purchasableProp={this.updatePurchaseHandler(this.props.ingredientsProp)}
                        orderedProp={this.purchasingStateHandler}
                    />
                </Aux>
            )
            orderSummary = <OrderSummary 
                                price={this.props.totalPriceProp}
                                ingredients={this.props.ingredientsProp} 
                                purchaseCancelled={this.purchaseCancelHandler}
                                purchaseContinued={this.purchaseContinueHandler}    
                            />
        }
        
        if(this.state.loading){
            orderSummary = <Spinner />
        }
        
        return(
            <Aux>
                <Modal show={this.state.purchasingState} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal> 
                {burger}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredientsProp: state.ingredients,
        totalPriceProp: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded: (ingName) => 
            dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => 
            dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))