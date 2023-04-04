import React, { Component } from 'react'

export class MainProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { products } = this.props
    return (
      <div>
        <h1>商品列表</h1>
        <ul>
          {products.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default MainProducts
