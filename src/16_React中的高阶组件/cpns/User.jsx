import React, { PureComponent } from 'react'
import enhancedComponent from '../HOC/enhancedComponent'

export class User extends PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.props.address}</h1>
      </div>
    )
  }
}

export default enhancedComponent(User)
