import React, {Component} from "react";

class SortButtons extends Component {
    render() {
        return (
            <div className="sortButtons">
                <button className="btn" onClick={() => this.props.algo('Selection Sort')}>Selection Sort</button>
                <button className="btn" onClick={() => this.props.algo('Insertion Sort')}>Insertion Sort</button>
                <button className="btn" onClick={() => this.props.algo('Bubble Sort')}>Bubble Sort</button>
                <button className="btn" onClick={() => this.props.algo('Merge Sort')}>Merge Sort</button>
                <button className="btn" onClick={() => this.props.algo('Quick Sort')}>Quick Sort</button>
            </div>
        );
    }
}

export default SortButtons;
