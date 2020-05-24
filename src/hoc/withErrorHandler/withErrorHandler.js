import React , {Component} from 'react' ;
import Aux from '../../hoc/Auxillary';
import Model from '../../components/ui/Modal/Modal'

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component {
        state = {
            error : null
        }

        componentDidMount() {
            axios.interceptors.request.use(req=> {
                this.setState({error:null}) ;
                return req;
            });

            axios.interceptors.response.use(res=>res,error=> {
                this.setState({error :error}) ;
                console.log("Setting error .. "+error);
            }) ;
        }

        errorConfirmHandler = ()=> {
            this.setState({error:null});
        }

        render() {

        
        return (
            <Aux>
                <Model show={this.state.error} modalClosed={this.errorConfirmHandler}>
                   {this.state.error? this.state.error.message : null}
                </Model>
                <WrappedComponent {...this.props}/>
            </Aux>
        );
       }
    }
}

export default withErrorHandler;