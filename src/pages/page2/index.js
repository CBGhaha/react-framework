import React, { Component } from 'react'
import { connect } from 'react-redux'
@connect(store => ({
  count: store.count
}))
export default class Page2 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { count } = this.props
    return (
      <div>
        page2
        <p>count:{count.data}</p>
      </div>
    )
  }
}
