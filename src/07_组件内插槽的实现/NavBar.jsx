import React, { Component } from 'react'
import './style.css'

export class NavBar extends Component {
  render() {
    const { children } = this.props
    return (
      // 因为react是在调用React.createElement()而实现虚拟DOM的创建，而插槽属于一个组件的children，存在于每一个react元素的props的children节点中
      // 并且值得注意的是：当插入的元素只有一个时，children就是该元素，如果有多个元素插入则会使用一个数组来存储所有的react元素
      <div className="container">
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default NavBar
