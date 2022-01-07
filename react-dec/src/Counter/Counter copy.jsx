import React from 'react'
class Counter extends React.Component {
    //qty = 1;  // componnet own data - state 
    state = {
        qty: 1
    }
    incrHandler = () => {
        console.log("Test Case - Incr Handler");
        this.setState({ qty: this.state.qty + 1 })
    }
    decrHandler = () => {
        console.log("Test Case - Decr Handler")
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return <div>
            <h4>Quantity : {this.state.qty}</h4>
            <button onClick={this.incrHandler}>Incr</button>
            <button onClick={this.decrHandler}>Decr</button>
        </div>
    }
}
export default Counter