import { PureComponent } from 'react'

function enhancedComponent(WrapperComponent) {
  class NewCpn extends PureComponent {
    constructor() {
      super()
      this.state = {
        userInfo: {
          name: 'LYJC',
          age: 22,
          address: '江西省吉安市'
        }
      }
    }

    render() {
      return <WrapperComponent {...this.props} {...this.state.userInfo} />
    }
  }

  return NewCpn
}

export default enhancedComponent
