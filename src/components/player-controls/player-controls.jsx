import React, { Component } from "react";
import PlayPause from "./play-pause/playPause.jsx";
import VolumeMute from "./volume-mute/volumeMute.jsx";
import Equalizer from "../../components/player-controls/Equalizer/Equalizer.jsx";
import "./player-controls.sass";

class Controls extends Component {

    state = {
        music: null,
        EQisShowed: "none"
    };

    toogleEq = e => {
        e.preventDefault();
        if(this.state.EQisShowed == "none") {
            this.setState({EQisShowed: "show"})
        } else {
            this.setState({EQisShowed: "none"})
        }
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
        }
    }

    render() {
        const { EQisShowed } = this.state;

        return(
            <div className="player">
                <Equalizer showed={EQisShowed} music={ this.state.music }/>
                <div className="controls">
                    <div className="playPause-control__stationName">
                        <PlayPause music={ this.state.music }/>
                        <div className="stationName">
                            <p>{this.props.stationName}</p>
                        </div>
                    </div>
                    <div className="volume__equalizerBtn">
                        <VolumeMute music={ this.state.music }/>
                        <a
                            href="#"
                            className="EQBtn"
                            onClick={this.toogleEq}
                        >eq</a>
                    </div>
                </div>
            </div>


        )
    }
}

export default Controls;