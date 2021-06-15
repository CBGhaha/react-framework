import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import asyncComponent from 'components/asyncComponent';
import Notfind from '../pages/404';
const Home = asyncComponent(() => import('../pages/home/index.js'));
const Page1 = asyncComponent(() => import('../pages/page1'));
const Page2 = asyncComponent(() => import('../pages/page2'));
const Hooks = asyncComponent(() => import('../pages/hooks'));
const links = [
  { routerName: 'HomePage', url: '/' },
  { routerName: 'Page1', url: '/page1' },
  { routerName: 'Page2', url: '/page2' },
  { routerName: 'Hooks', url: '/hooks' }
];

const myRouter = props => {
  return (
    <Router>
      <div>
        <ul>
          {links.map((item, index) => (
            <li key={index.toString()}>
              <Link to={item.url}>{item.routerName}</Link>
            </li>
          ))}
        </ul>
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/hooks" component={Hooks}/>
          <Route exact path="/" component={Home} />
          <Route component={Notfind} />
        </Switch>
      </div>
    </Router>
  );
};
export default myRouter;
