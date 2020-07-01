import React from 'react';
import './App.css';
import VisualBox from "./component/VisualBox";
import SortButtons from "./component/SortButtons";
import ConditionalButton from "./component/ConditionalButton";

function App() {
    return (
        <div className="App">
            <SortButtons/>
            <VisualBox/>
            <ConditionalButton/>
        </div>
    );
}

export default App;
