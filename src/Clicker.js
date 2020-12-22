import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
        // Bind function into constructor to guarentee the value of 'this'
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        let newNum = Math.floor(Math.random() * 10) + 1
        this.setState({ num: newNum })
    }
    render() {
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                {this.state.num === 7 && <h2>YOU WIN!</h2>}
                {this.state.num !== 7 && <button onClick={this.handleClick}>CLICK MEH</button>}

            </div>
        )
    }
}

export default Clicker