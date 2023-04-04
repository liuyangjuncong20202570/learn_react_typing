import { ThemeContext } from './contexts/ThemeContext'

function HomeBanner() {
  return (
    <div>
      <h1>HomeBanner</h1>
      {/* 对于在函数式组件中使用context一般是用context.consumer包裹一个函数，该函数会传入一个参数，该参数包括所有的context共享数据 */}
      <ThemeContext.Consumer>
        {(value) => {
          return (
            <div>
              <h1>{value.name}</h1>
              <h1>{value.age}</h1>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    </div>
  )
}

export default HomeBanner
