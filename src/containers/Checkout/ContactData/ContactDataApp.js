import React from 'react'
import axios from '../../../axios-orders'
import { connect } from 'react-redux'
import Button from '../../../components/UI/Button/ButtonApp'
import Spinner from '../../../components/UI/Spinner/SpinnerApp'
import Input from '../../../components/UI/Input/InputApp'
import './ContactData.css'


class ContactData extends React.Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                isTyped: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                isTyped: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                isTyped: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                isTyped: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                isTyped: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{value: 'fastest', displayValue: 'Fastest'},
                            {value: 'cheapest', displayValue: 'Cheapest'}]
                },
                value: '',
                validation:{},
                valid: true
            }
        },
        loading: false,
        formIsValid :false
    }

    checkValidity(value, rules) {
        let isValid = true
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        return isValid
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true})
        const FormData = {}
        for (let felid in this.state.orderForm) {
            FormData[felid] = this.state.orderForm[felid].value
        }
       
        const order = {
            ingredients: this.props.ingredientsProp,
            price: this.props.totalPriceProp,
            orderData: FormData   
        }
       
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: false})
            })
    }

    inputChangedHandler = (event, ID) => {
        const updatedOrderForm = { ...this.state.orderForm}
        const updatedFormElement = {...updatedOrderForm[ID]}
        updatedFormElement.value = event.target.value
        updatedFormElement.isTyped = true
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedOrderForm[ID] = updatedFormElement

        let formIsValidConst = true
        for(let felid in updatedOrderForm){
            formIsValidConst = updatedOrderForm[felid].valid && formIsValidConst
        }

        console.log(updatedOrderForm)
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValidConst})
    }

    render(){

        const formElementsArray = []
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        const formElementsArrayMapped = formElementsArray.map(a => 
            <Input 
                key={a.id}
                elementType={a.config.elementType} 
                elementConfig={a.config.elementConfig} 
                value={a.config.value}
                changed={(event) => this.inputChangedHandler(event, a.id)} 
                invalid={!a.config.valid}
                shouldValidate={a.config.validation}
                isTyped={a.config.isTyped}
            />
        )

        let form = (
                    <form onSubmit={this.orderHandler}>
                        {formElementsArrayMapped}
                        <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
                    </form>
                )       
        if (this.state.loading){ form = <Spinner /> } 
            

        return(
            <div className="ContactData">
                <h4>Enter your contact data :</h4>
                {form}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ingredientsProp: state.ingredients,
        totalPriceProp: state.totalPrice
    }
}


export default connect(mapStateToProps)(ContactData)