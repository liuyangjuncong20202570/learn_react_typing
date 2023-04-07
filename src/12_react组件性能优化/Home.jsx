import React, { Component } from 'react'

export class Home extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.message !== this.props.message) return true
    return false
  }
  render() {
    console.log('Home render')
    return <div>Home</div>
  }
}

export default Home
