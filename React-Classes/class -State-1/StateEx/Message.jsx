import React from 'react'
class Message extends React.Component {
    state = {
        msg: "Hello..."
    }
    gmHandler = () => {
        this.setState({ msg: "Good Morning..." })
    }
    gaHandler = () => {
        this.setState({ msg: "Good Afternoon" })
    }
    gnHanlder = () => {
        this.setState({ msg: "Good Night" })
    }
    render() {
        console.log("First! - render method executing")
        return <div>
            <h1>Message Info:{this.state.msg}</h1>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>

            <button onClick={this.gnHanlder}>GN</button>

        </div>
    }
}
export default Message