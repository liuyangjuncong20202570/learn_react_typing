import React, { Component } from 'react'
import Home from './Home'
import HomeRecommand from './HomeRecommand'
import Profile from './Profile'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello World',
      counter: 100
    }
  }

  btnClick() {
    this.setState({ counter: this.state.counter + 1 })
  }

  changeText() {
    this.setState({ message: 'Hello React' })
    // this.setState({ message: 'Hello World' })
  }

  // 使用scu优化，通过对props、state值变化来控制是否重新调用render函数
  shouldComponentUpdate(newProps, newState) {
    if (
      this.state.message !== newState.message ||
      this.state.counter !== newState.counter
    )
      return true
    return false
  }

  // 如果不对render函数的调用进行控制，则每一次变化，子组件、子组件的子组件的render函数都要重新加载，这样的性能是十分低的
  render() {
    const { message, counter } = this.state
    console.log('App render')
    return (
      <div>
        <h1>message:{message}</h1>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <h1>当前计数：{counter}</h1>
        <button onClick={(e) => this.btnClick()}>counter+1</button>
        <Home message={message} />
        <HomeRecommand counter={counter} />
        <Profile message={message} />
      </div>
    )
  }
}

export default App
