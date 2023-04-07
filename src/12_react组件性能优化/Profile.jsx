import { memo } from 'react'
// 要对函数式组件进行scu优化，需要memo这个高阶函数，对普通的函数式组件进行包裹
// 这样就能对props进行浅层比较
const Profile = memo(function (props) {
  console.log('Profile render')
  return <h1>{props.message}</h1>
})

export default Profile
