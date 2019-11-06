import React, { Component } from 'react'
import Child1 from './component/child1.js'
import Child2 from './component/child2.js'
import { Route, Link } from 'react-router-dom'
export default class Page1 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="clearfix">
        page1
        <Child1 />
      </div>
    )
  }
}
