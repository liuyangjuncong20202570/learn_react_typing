import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleSubmit(e) {
    // 1：取消表单的默认事件
    e.preventDefault()
    // 2：获取所有的表单数据
    console.log('所有数据')
    console.log(this.state.username)
    // 3：通过网络请求将数据传递到远程服务器（ajax，axios，fetch）
  }

  handlechangeEvent(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    const { username } = this.state
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => this.handlechangeEvent(e)}
            />
          </label>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

export default App
