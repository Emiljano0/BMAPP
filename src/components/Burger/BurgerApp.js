import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredientApp'
import './Burger.css'


const burger = (props) => {

    let transformedIngredients = Object.keys(props.burgerIngredients).map(ingrKey => {
        return [...Array(props.burgerIngredients[ingrKey])].map((_, i) => {
            return <BurgerIngredient key={ingrKey + i} type={ingrKey} />
        }
        ) }).reduce((prevValue, currValue) => {
         return prevValue.concat(currValue)
        }, [])

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding Ingredients</p>
    }

    // let arrayOfArrays = [{a: 2},[[{b: 4}],{c: -12}]]
    // let arrayOfArraysRED = arrayOfArrays.reduce((initialValueToBeAdded, theElementToBeAdded) => 
    // { return initialValueToBeAdded.concat(theElementToBeAdded)}, [])
    // console.log('arrayOfArrays',arrayOfArrays)
    // console.log('arrayOfArraysRED',arrayOfArraysRED)



    // console.log('Which elements are you going to map: ', Object.keys(props.burgerIngredients))
    // console.log('How many times are you going to map each of them : ', 
    //     Object.keys(props.burgerIngredients).map(ingrKey => {
    //         return [...Array(props.burgerIngredients[ingrKey])]}))
    // console.log('transformedIngredients : ', Object.keys(props.burgerIngredients).map(ingrKey => {
    //     return [...Array(props.burgerIngredients[ingrKey])].map((_, i) => {
    //         return <BurgerIngredient key={ingrKey + i} type={ingrKey} />
    //     }
    //  ) }))
    // console.log('The final Array : ', transformedIngredients)

    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
                {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}


export default burger