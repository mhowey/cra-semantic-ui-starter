import React, { Component } from 'react'
import HorizontalTabMenu from '../Menus/HorizontalTabMenu'
import { Router } from '@reach/router'
import TestComponent from '../TestComp'
import Header from '../Layout/Header'

class DefaultLayout extends Component {
  render() {
    return (
      <div className="ui container">
        <div>
          <Header />
        </div>
        <div>
          <HorizontalTabMenu />
        </div>
        <div>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export const Footer = () => {
  return (
    <div className="ui card fluid">
      <h3>Footer Here</h3>
      <Router>
        <TestComponent path="test-component" />
      </Router>
    </div>
  )
}

export default DefaultLayout
