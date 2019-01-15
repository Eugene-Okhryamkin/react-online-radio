import React, { Component } from "react";
import EQControlsItem from "../../../constants/EQControlItem/EQControlItem.jsx";
import "./Equalizer.sass";

class Equalizer extends Component {
    constructor() {
        super();
    }

    render() {
        const { showed } = this.props;
        return(
            <div className={"Equalizer" + " " + showed}>
                <div className="EQtitle">
                    <h3>equalizer</h3>
                </div>
                <div className="EQControls">
                    <EQControlsItem />
                </div>
            </div>
        )
    }
};

export default Equalizer;
