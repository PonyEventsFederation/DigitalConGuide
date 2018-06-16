import React from 'react'

import StructureNavigation from '../Structure/Navigation'

module.exports = function () {
    let type = this.props.type || "seconday";
    let contentClass = "content__inner content__inner--" + type;

    if (this.props.footerless) {
        contentClass += " content__inner--footless"
    }

    return [
        <StructureNavigation key="navigation"/>,
        <div key="innerContent" className={contentClass}>
            <div className="page-wrapper">
                <div className="page">
                    <div className="page__inner">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>
    ];
};