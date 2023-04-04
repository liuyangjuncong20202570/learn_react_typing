import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProducts from './MainProducts'
import axios from 'axios'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      banners: ['新观众', '新表演', '新银趴'],
      products: ['黄瓜', '木瓜', '红薯', '白薯'],
      mvList: []
    }
  }

  componentDidMount() {
    axios.get('http://codercba.com:9002/top/mv').then((res) => {
      this.setState({
        mvList: res.data.data
      })
    })
  }

  render() {
    const { banners, products, mvList } = this.state
    return (
      <div>
        <MainBanner mvList={mvList} banners={banners} />
        <MainBanner />
        <MainProducts products={products} />
      </div>
    )
  }
}

export default Main
