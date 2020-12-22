import React, { Component } from 'react'

class BrokenClick extends Component {
    handleClick = () => {
        this.setState({ clicked: true })
    }

    constructor(props) {
        super(props)
        this.state = { clicked: false }
        // Bind function into constructor to guarentee the value of 'this'

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