import React from 'react'
import Aux from '../../../hoc/AuxDir/Aux'
import Backdrop from '../Backdrop/BackdropApp'
import './Modal.css'


class Modal extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
         return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentDidUpdate() {
        console.log('[Modal] did update')
    }

    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} backdropClicked={this.props.modalClosed}/>
                <div 
                    className='Modal'
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>

        )
    } }


export default Modal