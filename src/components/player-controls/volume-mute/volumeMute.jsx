import React, { Component } from "react";
import "./volumeMute.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeDown, faVolumeMute, faVolumeOff, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

class VolumeMute extends Component {

      state = {
          volume: 0.5,
          muted: true
      };

    handleChangeVolume = e => {
        const { music } = this.props;
        this.setState({volume: e.target.value});
        music.volume = this.state.volume;
    };

    handleMuteAudio = e => {
        e.preventDefault();
        const { muted } = this.state;
        const { music } = this.props;
        muted ? this.setState({muted: false}) : this.setState({muted: true});
        music.muted = muted;
    };

    render() {
        const { volume, muted } = this.state;
        return(
            <div className="volume">
                <div className="volumeTrack">
                    <label>
                        Громкость: { parseInt(volume * 100) } %
                        <input
                            type="range"
                            max={1} min={0}
                            step="0.01"
                            value={ volume }
                            onChange={this.handleChangeVolume}
                        />
                    </label>
                </div>
                <div className="mute">
                    <a
                        href="#"
                        onClick={this.handleMuteAudio}
                    >
                        {muted ? <FontAwesomeIcon icon={volume == 0 ? faVolumeOff : (volume <= 0.5 ? faVolumeDown : faVolumeUp) } /> : <FontAwesomeIcon icon={faVolumeMute} />}
                    </a>
                </div>
            </div>
        )
    }
}

export default VolumeMute;