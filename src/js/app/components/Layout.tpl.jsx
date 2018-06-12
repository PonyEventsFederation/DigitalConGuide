import React from 'react'
import LayoutHeader from './Layout/Header'
import LayoutContent from './Layout/Content'
//import LayoutFooter from './Layout/Footer'
import LayoutDarkener from './Layout/Darkener'

module.exports = function () {
    const parts = [
        <LayoutHeader key="header"/>,
        <LayoutContent key="content" type={this.props.type} footerless={this.props.hideFooter}>
            {this.props.children}
        </LayoutContent>,
    ];

    if (!this.props.hideFooter) {
        //parts.push(<LayoutFooter key="footer"/>);
    }

    parts.push(
        <LayoutDarkener key="darkener"/>,
    );
    return parts;
};