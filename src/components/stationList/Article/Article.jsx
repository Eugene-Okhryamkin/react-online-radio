import React, { Component } from "react";
import * as PropTypes from "prop-types";
import "./article.sass";

class Article extends  Component {

    state = {
        nowPlaying: false
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
        const { nowPlaying } = this.state;
        const { item: { stationName, stationImg }, played, update } = this.props;
        return (
            <div className="stationItem" onClick={() => {played(nowPlaying); update(this.props.item); }}>
                <div className="img">
                    <img src={ stationImg } alt={ stationName } />
                </div>
                <div className="overlay" onClick={ this.playStation }> </div>
            </div>
        )
    };
};

Article.propTypes = {
    item: PropTypes.shape({
        stationName: PropTypes.string.isRequired
    }),
    played: PropTypes.func.isRequired,
    update: PropTypes.func
};

export default Article;