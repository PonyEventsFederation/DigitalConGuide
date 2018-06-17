import React from 'react'
import {NavLink} from 'react-router-dom'

module.exports = function () {

    let active = this.props.active || false;
    return (
        <menu className={"menu " + (active ? 'menu--active' : '')}>
            <ul className="menu__list">
                <li><NavLink exact={true} activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Home </NavLink></li>
                {/*<li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Personal Timetable </NavLink></li>*/}
                {/*<li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Timetable </NavLink></li>*/}
                {/*<li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Panels &amp; Shows</NavLink></li>*/}
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/guests"}}>Guests of Honor </NavLink></li>
                {/*<li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Community Guests </NavLink></li>*/}
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/buckball"}}>Buckball </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/plushiecon"}}>PlushieCon </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/charity"}}>Charity Auction </NavLink></li>
                {/*<li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Vendors </NavLink></li>*/}
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/rules"}}>Rules &amp; Emergency Behavior </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/gala-night"}}>Gala Night </NavLink></li>
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/staff"}}>Staff </NavLink></li>
                {/*<li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Volunteers &amp; Acknowledgement </NavLink></li>*/}
                {/*<li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Merchandise </NavLink></li>*/}
                {/*<li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/"}}>Meals &amp; Snacks </NavLink></li>*/}
                <li><NavLink activeClassName="menu__list-item--active" className="menu__list-item" to={{pathname: "/imprint"}}>Imprint </NavLink></li>
            </ul>
        </menu>
    );
};