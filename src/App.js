import React, {Component} from 'react';
import './App.css';
import VisualBox from "./component/VisualBox";
import SortButtons from "./component/SortButtons";
import ActionButton from "./component/ActionButton";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            sortAlgo: 'Default (Bubble Sort)',
            action: 'Default (Number)'
        }

        this.setAlgo = this.setAlgo.bind(this);
        this.setAction = this.setAction.bind(this);
    }

    setAlgo(algo){
        this.setState({
            sortAlgo: algo
        });
    }

    setAction(action){
        this.setState({
            action: action
        })
    }

    render() {
        return (
            <div className="App">
                <SortButtons algo={this.setAlgo}/>
                <VisualBox algorithm={this.state.sortAlgo} action={this.state.action}/>
                <ActionButton action={this.setAction}/>
            </div>
        );
    }
}

export default App;
