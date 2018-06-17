import React from 'react'
import Swiper from 'react-id-swiper';
import RoomHelper from '../../helper/RoomHelper'

module.exports = function () {

    const sliderData = this.state.slides || [];

    const params = {
        direction: 'horizontal',
        slidesPerView: 'auto',
        touchMoveStopPropagation: true,
        spaceBetween: 0
    };

    return (
        <div className="slider slider--top">
            <Swiper {...params} ref={node => {
                if (node) {
                    this.swiper = node.swiper;
                    this.swiper.update();
                }
            }}>
                {
                    sliderData.map((item, i) => {
                        let itemColor = "slider__item--" + item.type;

                        return (
                            <div className={"slider__item " + itemColor} key={"slider-item-" + i}>
                                <span className="slider__text">{item.title}</span>
                                <span className="slider__room">{RoomHelper.getRoomName(item.room)}</span>
                                <span className="slider__time">{item.startsIn}</span>
                            </div>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};