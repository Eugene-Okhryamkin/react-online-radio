import React, { Component } from "react";
import "./article.sass";

class Article extends  Component {

    state = {
        played: false
    };

    playStation = e => {
        e.preventDefault();
        if(this.state.played) {
            this.setState({played: false});
        } else {
            this.setState({played: true})
        }
    };

    render() {
        const { played } = this.state;
        const { item: { stationName, stationImg } } = this.props;
        return (
            <div className="stationItem" onClick={() => {this.props.played(played); this.props.update(this.props.item); }}>
                <div className="img">
                    <img src={ stationImg } alt={ stationName } />
                </div>
                <div className="overlay" onClick={this.playStation}> </div>
            </div>
        )
    };
};

export default Article;