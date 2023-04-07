import React, { PureComponent } from 'react'
import ThemeContext from './context/ThemeContext'
import Product from './cpns/Product'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider
          value={{ color: 'red', size: 30, name: 'LYJC', age: 20 }}>
          <Product />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
