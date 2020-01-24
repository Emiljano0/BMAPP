import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItemsApp'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggleApp'
import Logo from '../../Logo/LogoApp'
import './Toolbar.css'


const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle drawerClicked={props.drawerToggleClicked} />
        <div style={{height: "80%"}}>
            <Logo />
        </div>
        <nav className="DesktopOnly"> 
            <NavigationItems />
        </nav>
    </header>
)


export default toolbar