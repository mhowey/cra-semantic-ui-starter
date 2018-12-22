import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export const Header = () => {
  return (
    <div>
      <h3>This is the UiKit Layout</h3>
    </div>
  )
}

class UikitLayout extends Component {
  render() {
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.5/css/uikit.min.css"
          />
        </Helmet>
        <div className="uk-animation-fade">
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
      <h3>UiKit Footer</h3>
    </div>
  )
}

export default UikitLayout
