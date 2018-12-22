import React, { Component } from 'react'
import DefaultLayout from './Layout/DefaultLayout'
// import SemanticLayout from './Layout/SemanticLayout'
// import UikitLayout from './Layout/UikitLayout'
// import BootstrapLayout from './Layout/BootstrapLayout'
// import BootstrapBasic from './Layout/BootstrapBasic'
import SemanticBasic from './Layout/SemanticBasic'
import { Router, Link } from '@reach/router'
import { Page1 } from './Pages/Page1'
import { Page2 } from './Pages/Page2'
import Page3 from './Pages/Page3'
import PageHome from './Pages/Home'

export default class App extends Component {
  render() {
    return (
      <>
        <SemanticBasic />
        <DefaultLayout>
          <div className="ui container">
            <div className="ui content fluid">
              <div className="router">
                <Router>
                  <PageHome path="/" />
                  <Page1 path="page-one" />
                  <Page2 path="page-two" />
                  <Page3 path="page-three" />
                </Router>
              </div>
            </div>
          </div>
        </DefaultLayout>
      </>
    )
  }
}
