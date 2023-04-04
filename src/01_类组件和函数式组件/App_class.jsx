import React from 'react'
import Hello from '../01_类组件和函数式组件/App_func'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '哈哈哈哈'
    }
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <h1>{message}</h1>
        <Hello />
      </div>
    )
  }
}

export default App
