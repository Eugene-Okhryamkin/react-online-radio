import React, { Component } from "react";
import Article from "./Article.jsx";

class Stations extends Component {

    renderStations = () => {
        const { data, updateData } = this.props;
        let template = null;

        if (data.length) {
            template = data.map((item, index) => {
                return <Article key={index} item={item} update={() => updateData(item)}/>
            });
        };

        return template;
    };

    render() {
        return (
            <div className="stations">
                {
                    this.renderStations()
                }
            </div>
        );
    };
};

export default Stations;