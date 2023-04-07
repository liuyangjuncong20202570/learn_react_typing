function loginAuth(WrapperComponent) {
  return (props) => {
    const token = localStorage.getItem('token')
    if (token) {
      return <WrapperComponent {...props} />
    } else {
      return <h1>暂未登录，请快去登录吧</h1>
    }
  }
}

export default loginAuth
