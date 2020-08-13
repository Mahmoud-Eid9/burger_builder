import React from 'react'
import classes from './Navigationitems.module.css'
import NavigationItem from './Navigationitem/Navigationitem' 
const NavigationItems = props =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
 )

 export default NavigationItems