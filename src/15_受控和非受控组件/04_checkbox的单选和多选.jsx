import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      checked: true,
      checkBox: [
        { name: 'sing', text: '唱', isChecked: false },
        { name: 'dance', text: '跳', isChecked: false },
        { name: 'rap', text: 'rap', isChecked: false }
      ]
    }
  }

  handleSubmit(e) {
    // 1：取消表单的默认事件
    e.preventDefault()
    // 2：获取所有的表单数据
    console.log('所有数据')
    const data = this.state.checkBox
      .filter((item) => item.isChecked)
      .map((item) => item.name)
    console.log(this.state.username, this.state.password, data)
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

  handleChecked(e) {
    this.setState({ checked: e.target.checked })
  }

  handleMutiCheckbox(e, index) {
    const checkBox = [...this.state.checkBox]
    checkBox[index].isChecked = e.target.checked
    this.setState({ checkBox })
  }

  render() {
    const { username, password, checked, checkBox } = this.state
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
          {/* 单个checkbox如何绑定，成为受控组件 */}
          <label htmlFor="agree">
            <input
              type="checkbox"
              id="agree"
              checked={checked}
              onChange={(e) => this.handleChecked(e)}
            />
            同意协议
          </label>

          {/* 多选框受控组件的实现 */}
          {checkBox.map((item, index) => {
            return (
              <label htmlFor={item.name} key={item.name}>
                <input
                  type="checkbox"
                  id={item.name}
                  checked={item.isChecked}
                  onChange={(e) => this.handleMutiCheckbox(e, index)}
                />
                {item.text}
              </label>
            )
          })}
          <div>
            <button type="submit">提交</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
