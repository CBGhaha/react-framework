import React,{Component}from 'react';
import RootLayout from '../layout/rootLayout';
import Notfind from '../pages/404';
import Home from '../pages/home/index.js';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

const links=[
  {routerName:'HomePage',url:'/'},
  {routerName:'Page1',url:'/page1'},
  {routerName:'Page2',url:'/page2'}
];
import {BrowserRouter  as Router,Route,Link,Switch} from 'react-router-dom';

const Mycomponent=({component:Component,...reset})=>(
    <Route {...reset} render={()=>(<RootLayout><Component/></RootLayout>)} />
)
 const myRouter=(props)=>{
    return (
      <Router>
        <div>
          <ul>
              {links.map((item,index)=>
                <li>
                  <Link to={item.url}>{item.routerName}</Link>
                </li>
              )}
          </ul>
          <Switch>
              <Route path="/page1" component={Page1}></Route>
              <Route exact path="/page2" component={Page2}></Route>
              <Mycomponent exact path="/" component={Home}/>
              <Route component={Notfind}></Route>
          </Switch>
        </div>
      </Router>
    )
}
export default myRouter;
