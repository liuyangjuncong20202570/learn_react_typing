import React, { Component } from 'react'
import propTypes from 'prop-types'

export class MainBanner extends Component {
  // 在ES2022中可以把父传子的数据的默认值设置为默认公有属性
  static defaultProps = {
    banners: [],
    mvList: [],
    title: '默认标题'
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { banners, mvList, title } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <h1>轮播图</h1>
        <ul>
          {banners.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        <h2>MV数据展示</h2>
        <ul>
          {mvList.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

MainBanner.propTypes = {
  banners: propTypes.array,
  mvList: propTypes.array
}

// 通常设定传参默认值使用
MainBanner.defaultProps = {
  banners: [],
  mvList: [],
  title: '默认标题'
}

export default MainBanner
