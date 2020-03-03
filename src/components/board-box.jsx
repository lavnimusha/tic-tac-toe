import React, { Component } from 'react';
import '../styles/box.css';
//import ReactDOM from "react-dom";

class Box extends Component {
    constructor(){
        super();
        this.state = {
            arr : Array(9).fill(null),
            toggle:'o',
        }
        this.handler = this.handler.bind(this);
        this.algo = this.algo.bind(this);
        this.Reset = this.Reset.bind(this);
    }
    handler(props){
        let a = [...this.state.arr]; 
        let prev_toggle = this.state.toggle;    
        a[props] = prev_toggle;
        this.setState((state)=>({arr: [...a],
                                toggle: (state.toggle === 'o') ? 'x':'o'}));
    }
    algo(){
        
        const rows = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        var a = [...this.state.arr];
        var flag = 0;
        
// Get child nodes

        for(let i = 0; i < rows.length; i++ ){
            let value = a[rows[i][0]];
            for(let j = 0; j < rows[i].length; j++ ){
                    var x = rows[i][j];
                    if(a[x] === value && value !== null)
                            flag = 1;
                    else{
                    flag = 0;
                    break;
                    }
            }
            if(flag === 1){
                console.log("coming here"+rows[i])
                
                return 1;
                
            }
        }
        return 0;
    }
    Reset(){
        let a = Array(9).fill(null);
        this.setState((state)=>({ arr: [...a]  }));
    }

    render() {
        var value = false;
        const dis = function (){
            this.value = true;
        }
        
        return (
        <div>
            <h1 className="heading">Tic-Tac-Toe</h1>
            <div className="grid-container">
            <button disabled={this.value}className="grid-item" onClick = {() => this.handler(0)}>{this.state.arr[0]}</button>
            <button disabled={this.value}className="grid-item" onClick = {() => this.handler(1)}>{this.state.arr[1]}</button>
            <button disabled={this.value}className="grid-item" onClick = {() => this.handler(2)}>{this.state.arr[2]}</button>
            <button disabled={this.value}className="grid-item" onClick = {() => this.handler(3)}>{this.state.arr[3]}</button>
            <button disabled={this.value}className="grid-item" onClick = {() => this.handler(4)}>{this.state.arr[4]}</button>
            <button disabled={this.value}className="grid-item" onClick = {() => this.handler(5)}>{this.state.arr[5]}</button>
            <button disabled={this.value}className="grid-item" onClick = {() => this.handler(6)}>{this.state.arr[6]}</button>
            <button disabled={this.value}className="grid-item" onClick = {() => this.handler(7)}>{this.state.arr[7]}</button>
            <button disabled={this.value}className="grid-item" onClick = {() => this.handler(8)}>{this.state.arr[8]}</button>
            </div>
            <button className="reset" onClick = {() => {this.Reset();this.value=false;}} >Reset</button>
            
            {(this.algo())!==1 ? '':<div>{this.value=true}<h1>Winner is {this.state.toggle === 'o' ? 'x':'o'}</h1></div> }
        </div>
            
        )
    }
}
export default Box;
