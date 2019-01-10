import React, { Component } from "react";
import "./player-controls.sass";

class Controls extends Component {
    state = {
        audio: false
    };

    tooglePlayPause = (e) => {
        e.preventDefault();
        this.setState({
            audio: true
        });
    }

    renderAudio = () => {
      const stream = new Audio();
      const { audio } = this.state;
      
      audio == true ? stream.play() : stream.pause();
    }

    render() {
        {this.renderAudio()}
        return(
            <div className="controls">
                <div className="playPause">
                    <a
                        href="#"
                        onClick={this.tooglePlayPause}
                    >play</a>
                </div>
            </div>
        )
    }
}
// http://radio.mfm.ua:80/online128
export default Controls;