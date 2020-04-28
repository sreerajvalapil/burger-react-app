import React from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css' ;
import Toolbar from '../../components/Navigation/Toolbar/Toolbar' ;
import SideDrawer from '../Navigation/SideDrawer/SideDrawer' ;


const layout = (props) => (
    <Aux>   
        <Toolbar></Toolbar>
        <SideDrawer></SideDrawer>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;