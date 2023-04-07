import React, { PureComponent } from 'react'

// 所谓高阶组件实际上就是一个接受组件作为参数，返回一个新组件的函数
function hoc(WrapperComponent) {
  class NewCPN extends PureComponent {
    render() {
      return <WrapperComponent name="LYJC" />
    }
  }

  return NewCPN
}

class Hello extends PureComponent {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}
const NewHello = hoc(Hello)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>高阶组件介绍</h1>
        <NewHello />
      </div>
    )
  }
}

export default App
