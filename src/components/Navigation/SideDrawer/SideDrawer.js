import React from 'react' ;
import Logo from '../../Logo/Logo' ;
import NavigationItems from '../NavigationItems/NavigationItems' ;
import classes from './SideDrawer.module.css' ;
import Backdrop from '../../ui/Backdrop/Backdrop' ;
import Aux from '../../../hoc/Auxillary'


const sideDrawer = props => {
    let sideDRawerClass = [classes.SideDrawer , classes.Close] ;
    if(props.open) {
        sideDRawerClass = [classes.SideDrawer , classes.Open] ;
    }
    return(
        <Aux>
        <Backdrop show ={props.open} clicked={props.closed}></Backdrop>
        <div className={sideDRawerClass.join(' ')}>
            <div className={classes.Logo}>
                <Logo></Logo>
             </div>
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
        </div>
        </Aux>) ;

}

export default sideDrawer ;