import React from 'react' ;
import classes from './NavigationItems.module.css' ;
import NavigationItem from './NavigationItem/NavigationItem' ;


const navigationItems = () => {
    return (
        <ul className= {classes.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem linke="/">Checkout</NavigationItem>
            
        </ul>
    );

}

export default navigationItems ;