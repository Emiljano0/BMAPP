import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummaryApp'
import ContactData from './ContactData/ContactDataApp'


class Checkout extends React.Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data')
    }

    render(props){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ingredientsProp} 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}
                />
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredientsProp: state.ingredients
    }
}


export default connect(mapStateToProps)(Checkout)