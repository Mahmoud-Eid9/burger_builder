import React from 'react'
import classes from './Navigationitem.module.css'
import { NavLink } from 'react-router-dom'

const Navigationitem = props => (
    <li className={classes.NavigationItem}>
        <NavLink exact={props.exact} activeClassName={classes.active} to={props.link}>{props.children}</NavLink>
    </li>
)

export default Navigationitem