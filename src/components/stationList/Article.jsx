import React, { Component } from "react";

class Article extends  Component {
    render() {
        return (
            <div className="stationItem">
                <a href="#" onClick={() => this.props.update(this.props.item)}>PLAY</a>
            </div>
        )
    };
};

export default Article;