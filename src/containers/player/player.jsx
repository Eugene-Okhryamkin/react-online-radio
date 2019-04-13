import React from "react";
import "./player.sass";
import Controls from "../../components/player-controls/player-controls.jsx"


const Player = (props) => {
    const { changedStation } = props;

    return(
        <div className="player">
            <Controls
                stream = {changedStation !== null ? changedStation.URL : ""}
                stationName={changedStation == null ? "" : changedStation.stationName}
            />
        </div>
    )
};

export default Player;