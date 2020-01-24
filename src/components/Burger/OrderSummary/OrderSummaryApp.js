import React from 'react'
import Aux from '../../../hoc/AuxDir/Aux'
import Button from '../../UI/Button/ButtonApp'


class OrderSummary extends React.Component {
    
    //this could be a functional component, doenst have to be a class
    componentDidUpdate(){
        console.log('[OrderSummary] did update')
    }

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients).map(ingrKey => {
            return (
                <li key={ingrKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingrKey}</span>
                    : {this.props.ingredients[ingrKey]}
                </li>
            )})
        
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A yummy burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.price}</strong></p>
                <p>Continue To Checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>    
        )
    }

}


export default OrderSummary