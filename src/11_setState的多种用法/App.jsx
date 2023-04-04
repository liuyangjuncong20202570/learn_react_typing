import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello World',
      count: 100
    }
  }

  btnClick() {
    // 用法一：setState的默认用法
    // 在React的事件处理中，对于setState方法的处理绝不是简单的用新对象覆盖源对象
    // 而是Object.assign(this.state, newState)做一个合并，同一个属性值用新值替换
    // this.setState({ message: 'Hello, React' })

    // 用法二：往setState中传递一个回调函数
    // 好处一：可以在回调函数中编写新state值的逻辑增强内聚性
    // 好处二：可以获取原state值和props
    // this.setState((state, props) => {
    //   console.log(state, props)
    //   return {
    //     message: 'Hello, React'
    //   }
    // })

    // 用法三：在setState中传递第二个参数：一个回调函数
    // 原因一：因为this.setState是一个异步调用函数所以不会阻塞进程
    // 如果想要获取更新之后的新state值进行逻辑编写，可以传递第二个参数
    // 该回调函数会等待数据更新完成后再调用
    this.setState({ message: 'Hello React' }, () => {
      console.log('这是更新之后的值：', this.state.message)
    })

    console.log('这是更新之前的值：', this.state.message)
  }

  render() {
    const { message, count } = this.state
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.btnClick()}>改变文本</button>
        <h2>当前计数：{count}</h2>
      </div>
    )
  }
}

export default App
