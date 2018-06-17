import React from 'react'

import {Link} from 'react-router-dom'

module.exports = function () {
    return (
        <header className="header">
            <div className="header__inner">
                <Link className="header__logo" to={"/"}>
                    <img src="/img/gc-logo.svg" alt="GalaCon 2018" />
                </Link>
                <div className="header__title">{this.state.title}</div>
                <div className="header__btn header__btn--menu" onClick={this.toggleMenu.bind(this)}>Menü</div>
            </div>
        </header>
    );
};