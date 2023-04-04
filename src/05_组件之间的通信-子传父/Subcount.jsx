import React, { Component } from 'react'

export class Subcount extends Component {
  subCount(num) {
    this.props.onBtnClick(num)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.subCount(1)}>-1</button>
        <button onClick={() => this.subCount(5)}>-5</button>
        <button onClick={() => this.subCount(10)}>-10</button>
      </div>
    )
  }
}

export default Subcount
