import React, { Component } from 'react'
import Home from './Home'
import HomeBanner from './HomeBanner'
import { ThemeContext } from './contexts/ThemeContext'
import { UserContext } from './contexts/UserContext'
import Profile from './Profile'

export class App extends Component {
  render() {
    return (
      <div>
        {/* 在函数式组件中如何使用context */}
        {/* 如果有多个context进行包裹 */}
        <UserContext.Provider value={{ color: 'red', fontSize: 100 }}>
          <ThemeContext.Provider value={{ name: 'LYJC', age: 22 }}>
            <Home />
            <HomeBanner />
          </ThemeContext.Provider>
        </UserContext.Provider>
        <Profile />
      </div>
    )
  }
}

export default App
