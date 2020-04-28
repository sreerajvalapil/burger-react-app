import React from 'react' ;
import classes from './Toolbar.module.css' ;
import Logo from '../../Logo/Logo' ;
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems' ;


const toolbar = props => {
    return(
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo></Logo>
        </div>
        <nv className={classes.DesktopOnly}>
            <NavigationItems ></NavigationItems>
        </nv>
       
    </header>)

}

export default toolbar ;