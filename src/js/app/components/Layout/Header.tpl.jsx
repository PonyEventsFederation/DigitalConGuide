import React from 'react'

import {NavLink} from 'react-router-dom'

module.exports = function () {
    return (
        <header className="header">
            <div className="header__inner">
                <NavLink className="header__logo" to={"/"}>
                    <img src="/img/gc-logo.svg"/>
                </NavLink>
                <div className="header__title">{this.state.title}</div>
                <div className="header__btn header__btn--menu" onClick={this.toggleMenu.bind(this)}>Menü</div>
            </div>
        </header>
    );
};