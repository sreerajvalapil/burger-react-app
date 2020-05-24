import React , {Component} from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css' ;
import Toolbar from '../../components/Navigation/Toolbar/Toolbar' ;
import SideDrawer from '../Navigation/SideDrawer/SideDrawer' ;


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = ()=> {
        this.setState({showSideDrawer:false});
    }

    sideDrawerOpenHandler = ()=> {
        this.setState((prevState) => {
            return {showSideDrawer:!prevState.showSideDrawer}
        });
    }

    render() {
        return(
            <Aux>   
            <Toolbar menuClickHandler={this.sideDrawerOpenHandler}></Toolbar>
            <SideDrawer open= {this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}></SideDrawer>
            <main className = {classes.Content}>
                {this.props.children}
            </main>
        </Aux>

        );
    }
}


export default Layout;