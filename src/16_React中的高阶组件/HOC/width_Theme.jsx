import ThemeContext from '../context/ThemeContext'

function widthTheme(Cpn) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          return <Cpn {...value} {...props} />
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default widthTheme
