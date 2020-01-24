import React from 'react'
import Modal from '../../components/UI/Modal/ModalApp'
import Aux from '../AuxDir/Aux'


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {

        constructor(props){
            
            super(props)

            this.state = {
                error: null
            }

            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null })
                return request
            })

            this.responseInterceptor = axios.interceptors.response.use(
                response => response, errorParam => {
                    this.setState({ error: errorParam })
                }
            )

        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.requestInterceptor)
            axios.interceptors.request.eject(this.responseInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render(){
            return (
                <Aux>
                    <Modal 
                        show={this.state.error} 
                        modalClosed={this.errorConfirmedHandler} 
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )

        }
    }
}


export default withErrorHandler