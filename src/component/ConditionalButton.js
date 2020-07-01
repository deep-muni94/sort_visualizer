import React, {Component} from "react";

class ConditionalButton extends Component {
    render() {
        return (
            <div className="condButtons">
                <button className="btn">Colors</button>
                <button className="btn">Number</button>
                <button className="btn">Randomize</button>
            </div>
        );
    }
}

export default ConditionalButton;
