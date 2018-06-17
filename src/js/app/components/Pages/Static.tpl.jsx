import React from 'react'

import Layout from "../Layout"
import ReactHtmlParser from "react-html-parser";

module.exports = function () {
    let img = null;

    if (this.state.img) {
        img = (
            <div className="image-wrapper image-wrapper--top">
                <img src={this.state.img} alt={this.state.title} />
            </div>
        )
    }
    const content = (
        <div className="page__content">
            <article className="article">
                {img}
                <h1 className="headline headline--big text--light">
                    {this.state.title}
                </h1>
                {ReactHtmlParser(this.state.text.join("\n"))}
            </article>
        </div>
    );

    if (this.props.renderLayout) {
        return (
            <Layout hideFooter={true} type="primary">
                {content}
            </Layout>
        );
    } else {
        return content
    }
};