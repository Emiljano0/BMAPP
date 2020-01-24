import React from 'react'
import './Order.css'


const order = (props) => {

    
    const orderArray = []
    for(let key in props.ingredients){
        orderArray.push({
            name: key,
            amount: props.ingredients[key]
        })
    }
    const ingredientOutput = orderArray.map(a => {
    return <span key={a.name} >{a.name}: {a.amount}</span>    
    })
    
        
        
    return (
        <div className="Order">
            <p>Ingredients:</p>
            <p>{ingredientOutput}</p>
            <p>Price: <strong>{props.price} $</strong></p>
        </div>
    )
}


export default order