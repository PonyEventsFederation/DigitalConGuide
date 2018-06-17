import React from 'react'
import ReactHtmlParser from 'react-html-parser';

module.exports = function () {
    return (
        <div className="page">
            <div className="page__inner">
                <div className="page__content">
                    <article className="article">
                        <div className="image-wrapper image-wrapper--top">
                            <img src={this.props.data.img} alt={this.props.data.title} />
                        </div>
                        <h1 className="headline headline--big text--light">
                            {this.props.data.title}
                        </h1>
                        <p><em>{this.props.data.function}</em></p>
                        {ReactHtmlParser(this.props.data.text.join("\n"))}
                    </article>
                </div>
            </div>
        </div>
    );
};