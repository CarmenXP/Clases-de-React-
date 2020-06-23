import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Components/home/Home'
import ProductsPage from './Components/products/ProductPage'

function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={ProductsPage}/>
        </Switch>
    )
}

export default Routes