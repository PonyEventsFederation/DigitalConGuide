import React from 'react'
import {NavLink} from 'react-router-dom'
import Swiper from 'react-id-swiper';

module.exports = function () {
    let pages = this.props.pages || [];
    let searchActive = this.props.showFilter || false;
    let slidePos = 0;

    const params = {
        direction: 'horizontal',
        slidesPerView: 'auto',
        touchMoveStopPropagation: true,
        spaceBetween: 0
    };

    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__content" style={{overflowX: "auto"}}>
                    <Swiper {...params} ref={node => {
                        if (node) {
                            this.swiper = node.swiper;
                            this.swiper.update();
                        }
                    }}>
                        {
                            pages.map((item, i) => {
                                item.pos = slidePos++;

                                return (
                                    <NavLink style={{width: "auto"}} key={item.url} exact={item.url === "/"} isActive={this.isActive.bind(this, item)} className="footer__list-item" to={item.url} activeClassName="footer__list-item--active">
                                        {item.title}
                                    </NavLink>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </footer>
    );
};