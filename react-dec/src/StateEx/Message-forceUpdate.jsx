import React from 'react'
class Message extends React.Component {
    msg = "Hello"
    changeMessage = () => {
        console.log("Test Case 123");
        console.log(this.msg);
        this.msg = "Good Morning"
        console.log(this.msg)
        this.forceUpdate();
    }
    render() {
        return <div>
            <h1>Message:{this.msg}</h1>
            <button onClick={this.changeMessage}>Change Message</button>
        </div>
    }
}
export default Message