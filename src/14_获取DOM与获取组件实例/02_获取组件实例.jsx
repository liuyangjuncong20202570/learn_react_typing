import React, { PureComponent, createRef, forwardRef } from 'react'

// export class Hello extends PureComponent {
//   render() {
//     return <div>Hello</div>
//   }
// }

// 2:针对函数式组件ref的转发

const Hello = forwardRef(function (props, ref) {
  return (
    <div>
      <h1 ref={ref}>哈哈哈哈哈</h1>
      <p>我是你爹</p>
    </div>
  )
})

export class App extends PureComponent {
  constructor() {
    super()
    this.titleEl = createRef()
  }

  btnClick() {
    console.log(this.titleEl.current)
  }

  render() {
    return (
      <div>
        <Hello ref={this.titleEl} />
        <button onClick={(e) => this.btnClick()}>点击获取组件实例</button>
      </div>
    )
  }
}

export default App
