import React,{Component}from 'react';
import Home from '../pages/home/index.js';
import {
    BrowserRouter  as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
 const myRouter=(props)=>{


    return (
      <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </div>
      </Router>
    )


}
export default myRouter;
