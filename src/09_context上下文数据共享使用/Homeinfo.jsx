import React, { Component } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import { UserContext } from './contexts/UserContext'

// 对于有多个context进行包裹，可以使用设置类组件的contextType也可以使用context.consumer进行包裹，使用对应的参数
export class Homeinfo extends Component {
  render() {
    return (
      <div>
        <h1>{this.context.name}</h1>
        <h1>{this.context.age}</h1>
        <UserContext.Consumer>
          {(value) => {
            return (
              <div>
                <h1>{value.color}</h1>
                <h1>{value.fontSize}</h1>
              </div>
            )
          }}
        </UserContext.Consumer>
      </div>
    )
  }
}

Homeinfo.contextType = ThemeContext

export default Homeinfo
