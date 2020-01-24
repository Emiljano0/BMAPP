import React from 'react'
import NavigationItem from './NavigationItem/NavigationItemApp'
import './NavigationItems.css'

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/"> BurgerBuilder </NavigationItem>
        <NavigationItem link="/orders"> Order </NavigationItem>
    </ul>
)


export default navigationItems