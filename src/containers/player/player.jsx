import React, { Component } from "react";
import "./player.sass";
import Controls from "../../components/player-controls/player-controls.jsx"


class Player extends Component {

    render() {
        const { changedStation } = this.props;

        return(
            <div className="player">
                <Controls
                    stream = {changedStation !== null ? changedStation.URL : ""}
                    stationName={changedStation == null ? "" : changedStation.stationName}
                />
            </div>
        )
    }
}

export default Player;