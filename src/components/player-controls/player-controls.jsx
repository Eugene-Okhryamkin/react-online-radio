import React, { Component } from "react";
import PlayPause from "./play-pause/playPause.jsx";
import VolumeMute from "./volume-mute/volumeMute.jsx";
import "./player-controls.sass";

class Controls extends Component {

    state = {
        music: null
    };

    componentDidMount() {
        const { stream } = this.props;
        window.audio = new Audio(stream);
        this.setState({music: audio});
    };

    componentWillReceiveProps(nextProps) {

        if (nextProps.stream !== this.props.stream) {
            audio.src = nextProps.stream;

            this.setState({
                music: audio
            });
            audio.play();
        }
    }

    render() {
        const { stationName, stationImg, stream } = this.props;
        const { music } = this.state;

        return(
            <div className="player">
                <div className="stationImg">
                    <img src={ stationImg } alt={ stationName }/>
                </div>
                <div className="controls">
                    <div className="playPause-control__stationName">
                        <PlayPause music={ music }  update={ stream }/>
                        <div className="stationName">
                            <p>{ stationName }</p>
                        </div>
                    </div>
                    <div className="volume">
                        <VolumeMute music={ music }/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Controls;