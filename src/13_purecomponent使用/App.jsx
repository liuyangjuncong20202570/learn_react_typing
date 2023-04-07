import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      books: [
        { name: 'js高级设计', price: 100, count: 1 },
        { name: 'python高级设计', price: 120, count: 1 },
        { name: 'java高级程序设计', price: 220, count: 1 }
      ]
    }
  }

  addnewBook() {
    const newBook = { name: 'VUE程序设计', price: 200, count: 1 }
    // 如果要对state中的值进行改变，首先要进行浅拷贝，创造一个内存地址不同但内容相同的对象
    const books = [...this.state.books]
    // 因为在React内部会对newstate、newprops进行shallowEqual浅层比较，只有变化了的值才会重新调用render函数
    books.push(newBook)
    this.setState({ books })
    // 因为在React内部，如果在原来的state值上进行增删改，引用数据类型的指向还是同一个，所以React内部仍会认为该值没有发生变化
    // 所以不会进行更新操作
  }

  addCount(index) {
    const books = [...this.state.books]
    books[index].count += 1
    this.setState({ books })
  }

  render() {
    const { books } = this.state
    return (
      <div>
        <h1>书籍数据</h1>
        {books.map((item, index) => {
          return (
            <div key={index}>
              <ul>
                <li>书名：{item.name}</li>
                <li>价格：{item.price}</li>
                <li>销量：{item.count}</li>
              </ul>
              <button onClick={(e) => this.addCount(index)}>+1</button>
            </div>
          )
        })}
        <button onClick={(e) => this.addnewBook()}>添加书籍</button>
      </div>
    )
  }
}

export default App
