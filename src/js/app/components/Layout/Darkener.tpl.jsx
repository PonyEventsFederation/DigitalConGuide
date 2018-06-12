import React from 'react'

module.exports = function () {
    let active = this.getState("navigation.active");

    if (active) {
        return (
            <div className="darkener darkener--active" onClick={this.close.bind(this)}></div>
        );
    } else {
        return null;
    }
};