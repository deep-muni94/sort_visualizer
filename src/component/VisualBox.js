import React, {Component} from "react";
import './VisualBox.css';

class VisualBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            arr: []
        }

        this.sort = this.sort.bind(this);
    }

    componentDidMount() {

        let temp = [];

        for(let i = 0; i < 64; i++){
            temp[i] = i + 1;
        }

        temp.sort(() => Math.random() - 0.5);

        this.setState({
            arr: temp
        })
    }

    async sort(){

        let temp = this.state.arr;

        function wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        let flag = 0;
        for(let i = 0; i < this.state.arr.length; i++){
            for(let j = 0; j < (this.state.arr.length - i - 1); j++){
                if(temp[j] > temp[j+1]){
                    await wait(10);
                    let temp_1 = temp[j];
                    temp[j] = temp[j+1];
                    temp[j+1] = temp_1;
                    flag += 1;
                }
                this.setState({
                    arr: temp
                });
            }
            if(flag === 0)
                break;
        }
    }

    render() {
        return (
            <div className="visual-box">
                <p className="text">Sort: </p>
                <p className="text">Type: </p>
                <div className="box">
                    {
                        this.state.arr.map(num => {
                            return <div className="ele">{num}</div>
                        })
                    }
                </div>
                <button className="btn adj_1" onClick={this.sort}>Sort</button>
            </div>
        );
    }
}

export default VisualBox;
