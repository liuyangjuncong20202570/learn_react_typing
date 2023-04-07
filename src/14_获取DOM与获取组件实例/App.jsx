import React, { PureComponent } from 'react'
import { createRef, forwardRef } from 'react'

// export class Hello extends PureComponent {
//   render() {
//     return <div>Hello World</div>
//   }
// }
const Hello = forwardRef(function (props, ref) {
  return (
    <div>
      <h1 ref={ref}>Hello World</h1>
      <p>哈哈哈哈哈</p>
    </div>
  )
})

export class App extends PureComponent {
  constructor() {
    super()
    this.titleEl = createRef()
  }
  getDom() {
    // 对于获取类组件实例，直接在constructor中声明好ref对象，将该对象赋值给组件的ref属性即可
    // console.log(this.titleEl.current)
    // 问题：对于函数式组件如何将ref转发到函数式组件的DOM上？
    // 主要通过forwardRef()，内部的函数可接受两个参数：props和ref，第二个参数就可用来绑定DOM
    console.log(this.titleEl.current)
  }

  render() {
    return (
      <div>
        <Hello ref={this.titleEl} />
        <button onClick={(e) => this.getDom()}>点击获取组件实例</button>
      </div>
    )
  }
}

export default App
