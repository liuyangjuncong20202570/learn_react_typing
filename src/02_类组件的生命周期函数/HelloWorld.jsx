import React from "react";

class Hello extends React.Component {
  constructor(){
    super()
    this.state = {
      message: 'Hello World'
    }
    console.log('开始执行构造函数创建组件实例')
  }

  changeText(){
    this.setState({
      message: 'Hello React'
    })
  }

  render(){
    console.log('创建完组件实例后调用实例方法render渲染页面')
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeText()}>更改文本</button>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapShot){
    console.log(prevProps, prevState, snapShot)
  }

  componentDidMount(){
    console.log('已完成渲染且成功挂载Hello组件')
  }

  componentWillUnmount(){
    console.log('Hello组件被卸载了')
  }

  getSnapshotBeforeUpdate(){
    return {
      scrollView: 100
    }
  }
}

export default Hello