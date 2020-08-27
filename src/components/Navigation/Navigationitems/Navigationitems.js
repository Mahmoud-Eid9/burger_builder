import React from 'react'
import classes from './Navigationitems.module.css'
import NavigationItem from './Navigationitem/Navigationitem' 
const NavigationItems = props =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
       {props.isAuthenticated ? <NavigationItem link="/Orders">Orders</NavigationItem> : null}
        {!props.isAuthenticated 
        ? <NavigationItem link="/Auth">Authenticate</NavigationItem> 
        : <NavigationItem link="/logout">Log-out</NavigationItem>}
    </ul>
 )

 export default NavigationItems