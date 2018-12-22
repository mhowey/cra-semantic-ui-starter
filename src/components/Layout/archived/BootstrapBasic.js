import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class BootstrapBasic extends Component {
  render() {
    return (
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
        />
      </Helmet>
    )
  }
}

export default BootstrapBasic
