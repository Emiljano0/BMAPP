import React from 'react'
import Aux from '../AuxDir/Aux'
import Toolbar from '../../components/Navigation/Toolbar/ToolbarApp'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawerApp'
import './Layout.css'


class Layout extends React.Component{

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
    })}

    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} 
                />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 


export default Layout