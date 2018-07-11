import React,{Component} from 'react';
import Child1 from './component/child1.js';
import Child2 from './component/child2.js';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import action from '../../redux/actions/common.js';

import ajaxAction from '../../redux/actions/ajaxAction.js';
let { dispatch, getState }=store;
@connect((state)=>({
  page1Ajax:state.page1Ajax
}),{
  ajaxAction:ajaxAction
})

// dispatch(action('data1',{name:'bang'}));
// dispatch(ajaxAction('page1Ajax'))
// console.log(getState());

export default class Page1 extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(111);
    this.props.ajaxAction('page1Ajax');
    console.log(this.props.page1Ajax)
  }
  render(){
    return(
      <div className='clearfix'>
        <p onClick={()=>{console.log(this.props.page1Ajax);}}>page1</p>
        <div>
            <Route path="/page1/child1" component={Child1}></Route>
            <Route path="/page1/child2" component={Child2}></Route>
        </div>
      </div>
    )
  }
}
