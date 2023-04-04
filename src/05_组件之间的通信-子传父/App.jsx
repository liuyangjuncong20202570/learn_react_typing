import React, { Component } from 'react'
import { Main } from './Main.jsx'
import Subcount from './Subcount.jsx'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 100
    }
  }

  countChange(num) {
    this.setState({
      count: this.state.count + num
    })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>当前计数：{count}</h1>
        <Main onBtnClick={(num) => this.countChange(num)} />
        <Subcount onBtnClick={(num) => this.countChange(-num)} />
      </div>
    )
  }
}

export default App
