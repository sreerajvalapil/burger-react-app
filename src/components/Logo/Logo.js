import React from 'react' ;
import burgerLogo from '../../assets/images/burger-log.png' ;
import classes from './Logo.module.css' ;

const logo = props => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="My Burger"></img>
    </div>
) ;

export default logo ;