import React, { PureComponent } from 'react'
import widthTheme from '../HOC/width_Theme'
// import ThemeContext from '../context/ThemeContext'

export class Product extends PureComponent {
  render() {
    console.log(this.props)
    const { color, size, name, age } = this.props
    return (
      <div>
        {/* <ThemeContext.Consumer>
          {(value) => {
            return (
              <div>
                <h1>{value.color}</h1>
                <h1>{value.size}</h1>
              </div>
            )
          }}
        </ThemeContext.Consumer> */}
        <h2>
          {color} - {size} - {name} - {age}
        </h2>
        <h2>{color}</h2>
        <h2>{size}</h2>
        <h2>{name}</h2>
        <h2>{age}</h2>
      </div>
    )
  }
}

export default widthTheme(Product)
