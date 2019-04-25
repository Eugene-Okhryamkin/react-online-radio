import React, { Component } from "react";
import Player from "./player/player.jsx";
import Stations from "./../components/stationList/stationList.jsx";
import "./App.sass";
import "isomorphic-fetch"
import Preloader from "./../components/preloader/preloader.jsx"
const data = "./build/data/data.json";

class App extends Component {

    state = {
        stations: null,
        isLoading: false,
        changed: null
    };

    updateData = value => this.setState({changed: value});

    componentWillMount() {
        fetch(data)
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
                }, 5000);
            })
    };

    render() {
        const { stations, isLoading, changed } = this.state;
        return(
            <React.Fragment>
                {isLoading && <Preloader />}
                {!isLoading &&  <Player changedStation={changed} />}
                {Array.isArray(stations) && <Stations data={stations} updateData={this.updateData}/>}
            </React.Fragment>
        )
    }
}
export default App;