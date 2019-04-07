import React, { Component } from "react";

class Article extends  Component {
    render() {
        return (
            <div className="stationItem"onClick={() => this.props.update(this.props.item)}>
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <div className="overlay">
                    <a href="#" >PLAY</a>
                </div>
            </div>
        )
    };
};

export default Article;