import React, { Component } from 'react'
class CompB extends Component {
    render() {
        return (
            <div>
                <h1>CompB</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h5>Name:{this.props.kkkobj.name}</h5>
            </div>
        )
    }
}

export default CompB
