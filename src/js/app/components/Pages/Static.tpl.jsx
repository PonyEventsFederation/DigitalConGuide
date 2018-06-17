import React from 'react'

import Layout from "../Layout"
import ReactHtmlParser from "react-html-parser";

module.exports = function () {
    return (
        <Layout hideFooter={true} type="primary">
            <div className="page__content">
                <article className="article">
                    <h1 className="headline headline--big text--light">
                        {this.state.title}
                    </h1>
                    {ReactHtmlParser(this.state.text.join("\n"))}
                </article>
            </div>
        </Layout>
    );
};