import React from 'react'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandlerApp'
import Order from '../../components/Order/OrderApp'


class Orders extends React.Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = []
                for(let key in response.data){
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({loading: false, orders: fetchedOrders})

            })
            .catch(error=>{
                this.setState({loading: false})
            })
    }

    render(){
        return(
            <div>
                {this.state.orders.map(a => (
                    <Order key={a.id} ingredients={a.ingredients} price={a.price}  />))}
            </div>
        )
    }

}


export default withErrorHandler(Orders, axios)