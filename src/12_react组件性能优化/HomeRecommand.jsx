import React, { Component } from 'react'

export class HomeRecommand extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.counter !== this.props.counter) return true
    return false
  }
  render() {
    console.log('HomeRecommand render')
    return <div>HomeRecommand</div>
  }
}

export default HomeRecommand
