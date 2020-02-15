import React, { Component } from 'react';
import '../styles/box.css';


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
        var new_arr = [];
        let win = '';
        var a = [...this.state.arr];
        var flag = 0;
        for(let i = 0; i <= a.length-1; i++){
            for( let j = i+1; j <= a.length-2; j++){ 
                if(a[i] === a[j]){
                    let x = j-i;
                    let t = j+x;
                    win = a[j];
                    if(a[t] === a[i] && a[i] !== null){
                        new_arr.push(i);
                        new_arr.push(j);
                        new_arr.push(t);
                    
                        for(let k = 0;k <= rows.length-1 ; k++){
                            if(JSON.stringify(new_arr) === JSON.stringify(rows[k])){
                            flag = 1;
                            console.log("coming here" + win);         
                            break;
                            }
                            else{
                                flag = 0;
                            }
                        }
                    }       
                }
            }
        
        if(flag === 1){
            return flag;
        }
        
        }
        return 0;
    }
    Reset(){
        let a = Array(9).fill(null);
        this.setState((state)=>({ arr: [...a]  }));
    }

    render() {
        return (
        <div>
            <div className="grid-container">
            <button className="grid-item" onClick = {() => this.handler(0)}>{this.state.arr[0]}</button>
            <button className="grid-item" onClick = {() => this.handler(1)}>{this.state.arr[1]}</button>
            <button className="grid-item" onClick = {() => this.handler(2)}>{this.state.arr[2]}</button>
            <button className="grid-item" onClick = {() => this.handler(3)}>{this.state.arr[3]}</button>
            <button className="grid-item" onClick = {() => this.handler(4)}>{this.state.arr[4]}</button>
            <button className="grid-item" onClick = {() => this.handler(5)}>{this.state.arr[5]}</button>
            <button className="grid-item" onClick = {() => this.handler(6)}>{this.state.arr[6]}</button>
            <button className="grid-item" onClick = {() => this.handler(7)}>{this.state.arr[7]}</button>
            <button className="grid-item" onClick = {() => this.handler(8)}>{this.state.arr[8]}</button>
            </div>
            <button className="reset" onClick = {() => this.Reset()}>Reset</button>
            {(this.algo())!==0 ? <h1>Winner is {this.state.toggle === 'o' ? 'x':'o'}</h1> : ''}
        </div>
            
        )
    }
}
export default Box;
