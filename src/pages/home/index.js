import React,{Component} from 'react';
import context from '../../components/context.js';
import Child1 from './component/child1'
const {Consumer,Provider}=context;
// const {Consumer,Provider}=React.createContext('black');

export default class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>Home
        <Provider value='red'>
          <Consumer>
            {theme => (<button style={{color:theme}}>231212</button>)}
          </Consumer>
          <Child1/>
        </Provider>
        <Child1/>
      </div>
    )
  }
}
