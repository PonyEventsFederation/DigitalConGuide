import React from 'react'
import {NavLink} from 'react-router-dom'

module.exports = function () {

    let active = this.props.active || false;
    return (
        <menu className={"menu " + (active ? 'menu--active' : '')}>
            <ul className="menu__list">
                <li><NavLink exact={true} activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Home </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/guests"}}>Guests of Honor </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/imprint"}}>Imprint </NavLink></li>
            </ul>
        </menu>
    );
};