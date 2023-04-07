import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: 'LYJC'
    }
  }

  inputChange(event) {
    this.setState({ username: event.target.value })
  }

  // 所谓受控组件和非受控组件主要针对的是表单组件
  // 当表单元素绑定了value属性，并且该值为this.state中的值时，该组件称之为受控组件
  // 反之称之为非受控组件
  // 受控组件中，用户无法通过键盘向表单组件中添加数据，如果要更新数据，需要监听onchange事件，在回调函数中通过this.setState()
  // 并且通过event.target.value对state中的值进行更新
  render() {
    const { username } = this.state
    return (
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => this.inputChange(e)}
        />
        <h1>username: {username}</h1>
      </div>
    )
  }
}

export default App
