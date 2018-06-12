import React from 'react'

import StructureNavigation from '../Structure/Navigation'

module.exports = function () {
    let contentClass = "content__inner";
    if (this.props.type === "article") {
        contentClass += " content__inner--primary";
    }
    else {
        contentClass += " content__inner--secondary";
    }

    if (this.props.footerless) {
        contentClass += " content__inner--footless"
    }

    return [
        <StructureNavigation key="navigation"/>,
        <div key="innerContent" className={contentClass}>
            {this.props.children}
        </div>
    ];
};