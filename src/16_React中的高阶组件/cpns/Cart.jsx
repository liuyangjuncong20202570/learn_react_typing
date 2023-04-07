import React, { PureComponent } from 'react'
import loginAuth from '../HOC/loginAuth'

export class Cart extends PureComponent {
  render() {
    return (
      <div>
        <h1>您已登录</h1>
        <h2>购物车暂无商品</h2>
      </div>
    )
  }
}

export default loginAuth(Cart)
