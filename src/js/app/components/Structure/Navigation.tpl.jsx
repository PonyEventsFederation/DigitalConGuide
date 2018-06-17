import React from 'react'
import {NavLink} from 'react-router-dom'

module.exports = function () {

    let active = this.props.active || false;
    return (
        <menu className={"menu " + (active ? 'menu--active' : '')}>
            <ul className="menu__list">
                <li><NavLink exact={true} activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Home </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Personal Timetable </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Timetable </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Panels &amp; Shows</NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/guests"}}>Guests of Honor </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Community Guests </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Buckball </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>PlushieCon </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Charity Auction </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Vendors </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Rules &amp; Emergency Behavior </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Gall Night </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Staff </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Volunteers &amp; Acknowledgement </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Merchandise </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Meals &amp; Snacks </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/imprint"}}>Imprint </NavLink></li>
            </ul>
        </menu>
    );
};