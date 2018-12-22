import React from 'react'
import { navigate } from '@reach/router'

const Header = () => {
  return (
    <div className="ui segment piled">
      <div className="ui grid columns stackable">
        <div className="row">
          <div className="column two wide blue ">
            <i
              onClick={() => navigate(`/`)}
              className="universal access line icon huge"
              style={{ color: 'white', cursor: 'pointer' }}
            />
          </div>
          <div className="column fourteen wide">
            <h1>Default Template Website</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
