import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit(e) {
    // 1：取消表单的默认事件
    e.preventDefault()
    // 2：获取所有的表单数据
    console.log('所有数据')
    console.log(this.state.username, this.state.password)
    // 3：通过网络请求将数据传递到远程服务器（ajax，axios，fetch）
  }

  // handlechangeEvent(e) {
  //   this.setState({ username: e.target.value })
  // }

  handleUser(e) {
    // 当遇见多个表单组件绑定onChange事件时，可以使用计算属性来动态计算属性值
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => this.handleUser(e)}
            />
          </label>
          <label htmlFor="">
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => this.handleUser(e)}
            />
          </label>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

export default App
