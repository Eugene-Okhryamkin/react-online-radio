import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./playPause.sass";
import { faPauseCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

class PlayPause extends Component {

    state = {
        play: false
    };

    tooglePlayPause = e => {
        const { music } = this.props;
        e.preventDefault();

        if(this.state.play) {
            this.setState({play: false});
            music.pause();
        } else {
            this.setState({play: true});
            music.play();
        }
    };

    render() {
        const { play } = this.state;
        return(
            <div className="playPause">
                <a href="#" onClick={this.tooglePlayPause}>
                    {play && <FontAwesomeIcon icon={ faPauseCircle } />}
                    {!play && <FontAwesomeIcon icon={ faPlayCircle } />}
                </a>
            </div>
        )
    }
}

export default PlayPause;

