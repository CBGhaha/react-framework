import React, { Component } from 'react'
import context from '../../components/context.js'
import Child1 from './component/child1'
const { Consumer, Provider } = context
import { connect } from 'react-redux'
import { increaseCount } from '../../redux/actions/homeActions'
//react 的context上下文 上下文用于将一些全局的状态作用于全部子组件 (redux的store)
//Provider 的value属性值会改变 在其内部 Consumer createContext（‘value’）时定义的value 而其外部不会受改变
@connect(
  store => ({
    count: store.count
  }),
  {
    increaseCount
  }
)
export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  addCount = () => {
    const { count } = this.props
    this.props.increaseCount(count.data + 1)
  }
  render() {
    const { count } = this.props
    return (
      <div>
        <p>一个关于react上下文context的例子</p>
        <Provider value="red">
          <Consumer>
            {theme => <div style={{ color: theme }}>child</div>}
          </Consumer>
          <Child1 />
        </Provider>
        <Child1 />

        <div>______________________redux example_________________________</div>
        <div>count={count.data}</div>
        <button
          onClick={this.addCount}
          style={{ padding: '5px 10px', border: '1px solid #666' }}
        >
          +
        </button>
      </div>
    )
  }
}
