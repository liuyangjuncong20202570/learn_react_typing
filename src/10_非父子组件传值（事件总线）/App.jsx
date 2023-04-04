import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/eventBus'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: 0
    }
  }
  componentDidMount() {
    eventBus.on('prevBtnclick', (name, age) => this.eventHandler(name, age))
  }

  eventHandler(name, age) {
    this.setState({
      name,
      age
    })
  }

  componentWillUnmount() {
    eventBus.off('prevBtnclick', this.eventHandler)
  }

  render() {
    const { name, age } = this.state
    return (
      <div>
        <Home />
        <h1>
          姓名：{name}-年龄：{age}
        </h1>
      </div>
    )
  }
}

export default App
