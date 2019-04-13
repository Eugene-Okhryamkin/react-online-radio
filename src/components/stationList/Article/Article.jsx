import React, { Component } from "react";
import "./article.sass";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
            <div className="stationItem" onClick={() => this.props.update(this.props.item)}>
                <div className="img">
                    <img src={ stationImg } alt={ stationName } />
                </div>
                <div className="overlay" onClick={this.playStation}>
                    <a href="#" className="playStation">
                        {!played && <FontAwesomeIcon icon={ faPlay } className="playStationIcon"/>}
                        {played && <FontAwesomeIcon icon={ faPause } className="playStationIcon"/>}
                    </a>
                </div>
            </div>
        )
    };
};

export default Article;