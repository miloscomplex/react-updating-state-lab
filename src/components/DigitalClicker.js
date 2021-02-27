// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0,
    }
  }

  handleClick = () => {
    // update state here
    let addClick = this.state.timesClicked + 1
    this.setState({
      timesClicked: addClick
    })
  }

  render () {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }

}

export default DigitalClicker
