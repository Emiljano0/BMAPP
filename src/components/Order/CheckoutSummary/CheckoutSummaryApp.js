import React from 'react'
import Burger from '../../Burger/BurgerApp'
import Button from '../../UI/Button/ButtonApp'
import './CheckoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h1>We hope you enjoyed it</h1>
            <div style={{width: '100%', margin:'auto'}}>
                <Burger burgerIngredients={props.ingredients}/>
            </div>
            <Button btnType='Danger' clicked={props.checkoutCancelled}>Cancel</Button>
            <Button btnType='Success' clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )
}



export default checkoutSummary