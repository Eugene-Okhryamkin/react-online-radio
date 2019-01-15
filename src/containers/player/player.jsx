import React, { Component } from "react";
import "./player.sass";
import Controls from "../../components/player-controls/player-controls.jsx"


class Player extends Component {


    render() {
        return(
            <div className="player">
                <Controls
                    stream="http://ic7.101.ru:8000/a100?userid=0&setst=67ligu7ktiebnsvqk2b6926bei"
                    stationName="авто радио"
                />
            </div>
        )
    }
}

export default Player;