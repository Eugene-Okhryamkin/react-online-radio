import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./playPause.sass";
import { faPauseCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

class PlayPause extends Component {

    state = {
        play: false
    };

    shouldComponentUpdate(nextProps) {
        (nextProps.update !== this.props.update) ? this.setState({play: true}) : null;
        return true
    }

    playPause = () => {
      const { play } = this.state;
      const { music } = this.props;
      
      if(!play) {
          this.setState({play: true});
          music.play();
      } else {
          this.setState({play: false});
          music.pause();
      }

    };

    toogle = e => {
        e.preventDefault();
        this.playPause();
    };

    render() {
        const { play } = this.state;
        return(
            <div className="playPause">
                <a href="#" onClick={ this.toogle }>
                    {play && <FontAwesomeIcon icon={ faPauseCircle } />}
                    {!play && <FontAwesomeIcon icon={ faPlayCircle } />}
                </a>
            </div>
        )
    }
}

PlayPause.propTypes = {
    update: PropTypes.string.isRequired
};

export default PlayPause;

