import React, { Component } from "react";
import "./article.sass";

class Article extends  Component {
    render() {
        const { item: { stationName, stationImg } } = this.props;
        return (
            <div className="stationItem" onClick={() => this.props.update(item)}>
                <div className="img">
                    <img src={ stationImg } alt={ stationName } />
                </div>
                <div className="overlay">
                    <a href="#" >PLAY</a>
                </div>
            </div>
        )
    };
};

export default Article;