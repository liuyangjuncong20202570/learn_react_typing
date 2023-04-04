import React from "react";
import Hello from "./HelloWorld";


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isShow: true
    }
  }

  deleteCom(){
    this.setState({
      isShow: false
    })
  }

  render(){
    const { isShow } = this.state
    return (
      <div>
        {isShow && <Hello />}
        <button onClick={()=>this.deleteCom()}>删除组件</button>
      </div>
    )
  }
}

export default App