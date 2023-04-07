import React, { PureComponent } from 'react'
import { createRef } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.titleEl = createRef()
    this.title = null
  }
  getDom() {
    // 方法一：向ref传入一个字符串，通过this.refs.字符串获取相应的DOM（不推荐，已弃用）
    // console.log(this.refs.LYJC)
    // 方法二：首先先定义一个ref，使用createRef()，之后再赋给ref，该ref对象将DOM存储在current属性中
    // 推荐，这是官方写法
    // console.log(this.titleEl.current)
    // 方法三：向ref中传入一个回调函数，该回调的事件对象就是对应的DOM元素
    console.log(this.title)
  }

  coverDom(el) {
    this.title = el
  }

  render() {
    return (
      <div>
        {/* <h1 ref="LYJC">哈哈哈</h1> */}
        {/* <h1 ref={this.titleEl}>哈哈哈</h1> */}
        <h1 ref={(el) => this.coverDom(el)}>哈哈哈</h1>
        <button onClick={(e) => this.getDom()}>点击获取DOM</button>
      </div>
    )
  }
}

export default App
