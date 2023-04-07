import React, { Component } from 'react'
import { flushSync } from 'react-dom'

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
    // this.setState({ message: 'Hello React' }, () => {
    //   console.log('这是更新之后的值：', this.state.message)
    // })
    // console.log('这是更新之前的值：', this.state.message)
    // 在react中如何让setState为同步执行？
    // flushSync函数相当于只把传入该函数内部的回调进行批处理，当处理完成后才继续执行后面的代码，实现同步效果
    flushSync(() => {
      this.setState({ message: 'Hello, React' })
    })
    console.log(this.state.message)
  }

  // 这个实验说明：setState是一个异步操作，并且会将所有的同时进行的setState操作合并到一个队列之中
  // 所以render函数只执行一次，而会循环执行setState操作，提高性能
  // 如果要实现递增结果，应该使用setState的第二种用法

  btncountClick() {
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
    console.log(this.state.count)
  }

  render() {
    console.log('render函数执行了')
    const { message, count } = this.state
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.btnClick()}>改变文本</button>
        <h2>当前计数：{count}</h2>
        <button onClick={() => this.btncountClick()}>+1</button>
      </div>
    )
  }
}

export default App
