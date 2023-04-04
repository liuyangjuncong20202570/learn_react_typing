import React, { Component } from 'react'

export class Main extends Component {
  btnClick(num) {
    const { onBtnClick } = this.props
    onBtnClick(num)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.btnClick(1)}>+1</button>
        <button onClick={() => this.btnClick(5)}>+5</button>
        <button onClick={() => this.btnClick(10)}>+10</button>
      </div>
    )
  }
}

export default Main
