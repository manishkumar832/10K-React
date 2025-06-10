
import React from "react";
import './App.css'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  decrement=()=>{
  this.setState({count:this.state.count-1})
  }
  increment=()=>{
 this.setState({count:this.state.count+1})
  }
  render(){
    return(
      <div>
        <h1>Count APP</h1>
        <button onClick={this.decrement} disabled={this.state.count===0}>-</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment} disabled={this.state.count===Infinity}>+</button>
      </div>
    )
  }
}
export default App