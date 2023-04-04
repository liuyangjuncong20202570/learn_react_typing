import React, { Component } from 'react'
import '../cpns/tab-control.css'

export class Tabcontrol extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0
    }
  }

  spanClick(index) {
    this.setState({
      currentIndex: index
    })
  }

  tabClick(item) {
    const { onTabclick } = this.props
    onTabclick(item)
  }

  render() {
    const { currentIndex } = this.state
    const { channelList } = this.props
    return (
      <div className="banner">
        {channelList.map((item, index) => {
          return (
            <span
              className={`item ${currentIndex === index ? 'active' : ''}`}
              onClick={() => {
                this.spanClick(index)
                this.tabClick(item)
              }}
              key={item}>
              {item}
            </span>
          )
        })}
      </div>
    )
  }
}

export default Tabcontrol
