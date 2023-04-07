import Cart from '../cpns/Cart'

function loginAuth(wrapperComponent) {
  return (props) => {
    const token = localStorage.getItem('token')
    if (token) {
      return <Cart {...props} />
    } else {
      return <h1>暂未登录，请快去登录吧</h1>
    }
  }
}

export default loginAuth
