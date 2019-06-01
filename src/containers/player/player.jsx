import React from "react";
import * as PropTypes from "prop-types";
import "./player.sass";
import Controls from "../../components/player-controls/player-controls.jsx"


const Player = props => {
    const { changedStation } = props;

    return(
        <div className="player">
            <Controls
                stream = {changedStation !== null ? changedStation.URL : ""}
                stationName={changedStation !== null ? changedStation.stationName : ""}
                stationImg={changedStation !== null ? changedStation.stationImg : ""}
            />
        </div>
    )
};

Player.propTypes = {
    changedStation: PropTypes.shape({
        URL: PropTypes.string.isRequired,
        stationName: PropTypes.string.isRequired
    })
};

export default Player;