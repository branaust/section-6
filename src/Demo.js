import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'burgandy' }
    }
    render() {
        return <h1>{this.state.color}</h1>
    }
}

export default Demo;