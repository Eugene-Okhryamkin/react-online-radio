import React, { Component } from "react";
import PlayPause from "./play-pause/playPause.jsx";
import VolumeMute from "./volume-mute/volumeMute.jsx";
import "./player-controls.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music: null
        }
    }

    componentDidMount() {
        const { stream } = this.props;
        window.audio = new Audio(stream);
        this.setState({music: audio});
    }

    render() {
        const { volume, muted } = this.state;

        return(
            <div className="controls">
                <div className="playPause-control__stationName">
                    <PlayPause music={ this.state.music }/>
                    <div className="stationName">
                        <p>{this.props.stationName}</p>
                    </div>
                </div>
                <div className="volume__equalizerBtn">
                    <VolumeMute music={ this.state.music }/>
                </div>
            </div>

        )
    }
}
// http://radio.mfm.ua:80/online128
export default Controls;