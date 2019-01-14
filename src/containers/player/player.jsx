import React, { Component } from "react";
import "./player.sass";
import Controls from "../../components/player-controls/player-controls.jsx"

class Player extends Component {
    render() {
        return(
            <div className="player">
                <Controls
                    stream="http://radio.mfm.ua:80/online128"
                    stationName="mfm"
                />
            </div>
        )
    }
}

export default Player;