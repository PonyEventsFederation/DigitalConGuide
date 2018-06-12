import React from 'react'
import {Link} from 'react-router-dom'

module.exports = function () {

    let active = this.props.active || false;
    return (
        <menu className={"menu " + (active ? 'menu--active' : '')}>
            <ul className="menu__list">
                <li><a className="menu__list-item menu__list-item--active" href="#!">Home </a></li>
                <li><Link className="menu__list-item" to={{
                    pathname: "/artikel/4908",
                    state: {
                        dossier: null,
                        highlightNav: null
                    }
                }}>Impressum </Link></li>
            </ul>
        </menu>
    );
};