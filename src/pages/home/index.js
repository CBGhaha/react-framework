/**
 * react16中会默认加上key
 * 如果你未设置key，在render中react会默认为你加上key值
 * 比如 {ishow&&<div></div>} 和 <div><div> 就算前后render后他们的遍历索引（结构位置）是对应的
 * react也会判断这是一个删除重新插入的操作 因为他们的key值不等 {ishow&&<div></div>}的挂载和卸载
 * 都是它自己的删除和新增 不能被认为是其他节点的变化 去无效diff 因为他们的结构大概率是不一致的
 * 而且也影响了后续一系列的比对
 */
import React, { Component } from 'react'
window.div4_1 = ''
window.div4_2 = ''
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isshow: true
    }
  }
  componentWillMount() {
    this.setState(
      {
        isshow: false
      },
      () => {
        console.log('state down')
      }
    )
    console.log(this.state.isshow)
  }
  componentDidMount() {
    const ele = document.getElementsByClassName('div4')[0]
    window.div4_1 = ele
  }
  componentDidUpdate() {
    console.log(document.getElementsByClassName('div4')[0] === window.div4_1)
    console.log(document.getElementsByClassName('div4')[3] === window.div4_1)
    const ele = document.getElementsByClassName('div4')[0]
    window.div4_2 = ele
  }
  addCount = () => {
    const { count } = this.props
    this.props.increaseCount(count.data + 1)
  }
  click = () => {
    this.setState({
      isshow: false
    })
  }
  render() {
    const { isshow } = this.state
    return (
      <div>
        <div>1</div>
        <div>2</div>
        {!isshow && <div className="div4">4</div>}
        {!isshow && <div className="div4">4</div>}
        {!isshow && <div className="div4">4</div>}
        {isshow ? (
          <div className="div4">4</div>
        ) : (
          <div className="div4">4.1</div>
        )}
        {!isshow && <div className="div4">4</div>}

        <div>5</div>
        <div onClick={this.click}>click</div>
      </div>
    )
  }
}
