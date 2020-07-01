import React, {Component} from "react";

class SortButtons extends Component {
    render() {
        return (
            <div className="sortButtons">
                <button className="btn">Bubble Sort</button>
                <button className="btn">Insertion Sort</button>
                <button className="btn">Merge Sort</button>
                <button className="btn">Selection Sort</button>
            </div>
        );
    }
}

export default SortButtons;
