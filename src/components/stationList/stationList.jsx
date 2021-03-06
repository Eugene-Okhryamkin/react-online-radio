import React from "react";
import * as PropTypes from "prop-types";
import Article from "./Article/Article.jsx";
import "./stationList.sass";

const Stations = (props) => {

    const renderStations = () => {
        const { data, updateData, playing } = props;
        let template = null;

        if (data.length) {
            template = data.map((item, index) => {
                return <Article key={index} item={item} update={() => updateData(item)} played={(isPlayed) => playing(isPlayed)} />
            });
        };

        return template;
    };

    return(
        <div className="stations">
            {
                renderStations()
            }
        </div>
    );
};

Stations.propTypes = {
    data: PropTypes.array.isRequired,
    playing: PropTypes.func.isRequired,
    updateDate: PropTypes.func
};

export default Stations;