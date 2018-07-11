import React,{Component} from 'react';
import Child1 from './component/child1.js';
import Child2 from './component/child2.js';
import {Route} from 'react-router-dom';
import store from '../../redux/store.js';
import action from '../../redux/actions/common.js';
let { dispatch, getState }=store;
import ajaxAction from '../../redux/actions/ajaxAction.js';
dispatch(action('data1',{name:'bang'}));
dispatch(ajaxAction('page1Ajax'))
console.log(getState());

export default class Page1 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='clearfix'>
        <p onClick={()=>{console.log(getState());}}>page1</p>
        <div>
            <Route path="/page1/child1" component={Child1}></Route>
            <Route path="/page1/child2" component={Child2}></Route>
        </div>
      </div>
    )
  }
}
