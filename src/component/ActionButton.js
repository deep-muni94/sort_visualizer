import React, {Component} from "react";

class ActionButton extends Component {
    render() {
        return (
            <div className="actButtons">
                <button className="btn" onClick={() => this.props.action('Colors')}>Colors</button>
                <button className="btn" onClick={() => this.props.action('Number')}>Number</button>
                <button className="btn">Randomize</button>
                <button className="btn">Sort</button>
            </div>
        );
    }
}

export default ActionButton;
