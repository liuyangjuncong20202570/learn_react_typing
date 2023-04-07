import React, { PureComponent } from 'react'
import Cart from './cpns/Cart'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }
  loginBtn(e) {
    localStorage.setItem('token', '我登陆了')
    this.setState({ isLogin: true })
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.loginBtn(e)}>登录</button>
        <Cart />
      </div>
    )
  }
}

export default App
