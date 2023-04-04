import React, { Component } from 'react'
import Tabcontrol from './cpns/Tabcontrol'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      channel: ['流行', '新款', '精选'],
      content: '流行'
    }
  }

  tabClick(text) {
    this.setState({
      content: text
    })
  }

  render() {
    const { channel, content } = this.state
    return (
      <div>
        <Tabcontrol
          onTabclick={(text) => this.tabClick(text)}
          channelList={channel}
          itemType={(item) => <button>{item}</button>}
        />
        <h1>{content}</h1>
      </div>
    )
  }
}

export default App
