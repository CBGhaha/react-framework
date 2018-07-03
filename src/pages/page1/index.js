import React,{Component} from 'react';
import Child1 from './component/child1.js';
import Child2 from './component/child2.js';
import {
    BrowserRouter  as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
export default class Page1 extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='clearfix'>
        page1
        <div>


            <Route path="/page1/child1" component={Child1}></Route>
            <Route path="/page1/child2" component={Child2}></Route>

        </div>
      </div>
    )
  }
}
