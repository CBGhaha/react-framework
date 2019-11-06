import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AsyncComponent from 'components/asyncComponent'
import Notfind from '../pages/404'
const Home = AsyncComponent(() => import('../pages/home/index.js'))
const Page1 = AsyncComponent(() => import('../pages/page1'))
const Page2 = AsyncComponent(() => import('../pages/page2'))

const links = [
  { routerName: 'HomePage', url: '/' },
  { routerName: 'Page1', url: '/page1' },
  { routerName: 'Page2', url: '/page2' }
]

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
          <Route exact path="/" component={Home} />
          <Route component={Notfind} />
        </Switch>
      </div>
    </Router>
  )
}
export default myRouter
