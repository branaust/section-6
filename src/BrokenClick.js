import React, { Component } from 'react'

class BrokenClick extends Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
        // Bind function into constructor to guarentee the value of 'this'
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState({ clicked: true })
    }
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'CLICKED!!!' : 'Not Clicked'}</h1>
                <button onClick={this.handleClick}>CLICK ME!</button>
            </div>

        )
    }
}

export default BrokenClick