import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItemsApp'
import Backdrop from '../../UI/Backdrop/BackdropApp'
import Aux from '../../../hoc/AuxDir/Aux'
import Logo from '../../Logo/LogoApp'
import './SideDrawer.css'


const sideDrawer = (props) => {
    
    let attachedClasses = ["SideDrawer", "Close"]
    if(props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }

    return (
        <Aux>
            <Backdrop show={props.open} backdropClicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div style={{height: "11%", marginBottom: "32px"}}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}


export default sideDrawer