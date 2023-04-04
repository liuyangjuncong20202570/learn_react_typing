import React, { Component } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

export class Profile extends Component {
  render() {
    return (
      <div>
        <h1>{this.context.name}</h1>
        <h1>{this.context.age}</h1>
      </div>
    )
  }
}

Profile.contextType = ThemeContext

export default Profile
