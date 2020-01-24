import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/LayoutApp'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilderApp'
import Checkout from './containers/Checkout/CheckoutApp'
import Orders from './containers/Orders/OrdersApp'


class App extends React.Component {
  render(){
    return (
      <div>
        <Layout >
            <Switch>
              <Route path='/checkout' component={Checkout} />
              <Route path='/orders' component={Orders} />
              <Route path='/' exact component={BurgerBuilder} />
            </Switch>
        </Layout>
      </div>
    )
  }
}


export default App