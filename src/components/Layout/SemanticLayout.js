import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export const Header = () => {
  return (
    <div>
      <h3>This is the Semantic UI Layout</h3>
    </div>
  )
}

class SemanticLayout extends Component {
  render() {
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          />
        </Helmet>
        <div className="ui container">
          <div>
            <Header />
          </div>
          <div>{this.props.children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export const Footer = () => {
  return (
    <div>
      <h3>Semantic UI Footer</h3>
    </div>
  )
}

export default SemanticLayout
