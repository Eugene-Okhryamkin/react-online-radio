import React, { Component } from "react";
import Player from "./player/player.jsx";
import Stations from "./../components/stationList/stationList.jsx";

class App extends Component {

    state = {
        stations: null,
        isLoading: false,
        changed: null
    };

    updateData = value => this.setState({changed: value});

    componentWillMount() {
        fetch("./../build/data/data.json")
            .then((response) => {
                this.setState({
                    isLoading: true
                });
                return response.json();
            })
            .then((response) => {
                setTimeout(() => {
                    this.setState({
                        stations: response,
                        isLoading: false
                    });
                }, 1000);
            })
    };

    render() {
        const { stations, isLoading, changed } = this.state;
        return(
            <React.Fragment>
                <Player changedStation={changed}/>
                {isLoading && <p>Загружаю...</p>}
                {Array.isArray(stations) && <Stations data={stations} updateData={this.updateData}/>}
            </React.Fragment>
        )
    }
}
export default App;