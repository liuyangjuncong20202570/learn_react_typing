import React, { PureComponent } from 'react'
import enhancedComponent from './HOC/enhancedComponent'
import User from './cpns/User'

const Home = enhancedComponent(function (props) {
  return (
    <div>
      <h1>住址：{props.address}</h1>
      <h1>身高：{props.height}</h1>
    </div>
  )
})

const Profile = enhancedComponent(function (props) {
  return (
    <div>
      <h1>姓名：{props.name}</h1>
      <h1>年龄：{props.age}</h1>
    </div>
  )
})

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <User />
        <Home height="1.88" />
        <Profile />
      </div>
    )
  }
}
