import React,{Component} from 'react';
import context from '../../components/context.js';
import Child1 from './component/child1';
import Child2 from './component/child2';
const {Consumer,Provider}=context;

//react 的context上下文 上下文用于将一些全局的状态作用于全部子组件 (redux的store)
export default class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.rootProps)
    return(
      <div>
      <p>一个关于react上下文context的例子</p>
      <Provider value='red'>
        <Consumer>
          {theme => (<div style={{color:theme}}>child</div>)}
        </Consumer>
        <Child1/>
      </Provider>
      <Child1/>
      {
          React.cloneElement(
              <Child2/>,{publicProps:1}

          )


      }

      </div>
    )
  }
}
