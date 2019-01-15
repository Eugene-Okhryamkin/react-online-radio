import React, { Component } from "react";
import "./EQControlItem.sass";

const EQControlItem = () => {


    const values = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];
    const controlItem = values.map((item, index) => {
        return (
            <div className="ctrlItem" key={index}>
                    <input className="inputControl" type="range" key={index} values={item} />
                    <label>{item}</label>
            </div>

        )
    });

    return controlItem;
};

export default EQControlItem;

