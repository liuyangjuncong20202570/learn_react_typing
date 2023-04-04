import React, { Component } from 'react'
import { Navbar2 } from './nav-bar-2/Navbar2'
import NavBar from './NavBar'

export class App extends Component {
  render() {
    return (
      <div>
        {/* 插槽的实现1:使用children */}
        <NavBar>
          <button>按钮</button>
          <h2>我是标题</h2>
          <i>斜体文字</i>
        </NavBar>

        {/* 插槽的实现2：使用props传值 */}
        <Navbar2
          leftSlot={<button>按钮</button>}
          centerSlot={<h2>我是navbar2的标题</h2>}
          rightSlot={<i>斜体2</i>}
        />
      </div>
    )
  }
}

export default App
