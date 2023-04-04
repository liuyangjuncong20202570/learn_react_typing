import React, { Component } from 'react'
import eventBus from './utils/eventBus'

export class HomeBanner extends Component {
  prevClick() {
    console.log('上一个')
    eventBus.emit('prevBtnclick', 'lyjc', 20)
  }

  nextClick() {
    console.log('下一个')
  }

  render() {
    return (
      <div>
        <button onClick={() => this.prevClick()}>上一个</button>
        <button onClick={() => this.nextClick()}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner
