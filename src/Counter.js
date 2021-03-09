import React from "react";
import './Counter.css';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    };
    //this.increase();
    // this.decrease();
  }

  //increase() {
  //this.setState({
  // x: this.state.x + 1
  //});
  //}
  //decrease() {
  //this.setState({
  //x: this.state.x - 1
  //});
  //}
  increase = () => {
    this.setState({
      x: this.state.x + 1
    });
  };
  decrease = () => {
    this.setState({
      x: this.state.x - 1
    });
  };
  render() {
    return (
      <div>
        {this.state.x}
        <br />
       
        <button onClick={this.increase} class="button">Increase</button>
        
        
        <button onClick={this.decrease} class="button">Decrease</button>
        
      </div>
    );
  }
}

export default Counter;
