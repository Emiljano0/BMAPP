import React from 'react'
import BuildControl from './BuildControl/BuildControlApp'
import './BuildControls.css'


const controls = [
    { label: 'Salad', type:'salad'},
    { label: 'Bacon', type:'bacon'},
    { label: 'Cheese', type:'cheese'},
    { label: 'Meat', type:'meat'}
]

const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        { controls.map( a => (
            <BuildControl 
                key={a.label} 
                bcLabel={a.label} 
                addIngredientButton={() => props.addIngredientButton(a.type)}
                removeIngredientButton={() => props.removeIngredientButton(a.type )}
                disabled={props.disabled[a.type]}    
            />
        ))}
        <button 
            className='OrderButton'
            disabled={!props.purchasableProp}
            onClick={props.orderedProp}
        >
            ORDER NOW
        </button>
    </div>
)


export default buildControls