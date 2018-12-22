import React from 'react'
// import { Link } from '@reach/router'
import { Router, Link, Match } from '@reach/router'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? '#444' : '#777',
          fontSize: isCurrent ? '1.25rem' : '1rem',
          fontWeight: isCurrent ? 'bold' : 'normal',
        },
        className: isCurrent ? 'item active' : 'item',
      }
    }}
  />
)

const HorizontalTextMenu = props => {
  return (
    <nav className="hor-text-menu">
      <div className="ui secondary menu">
        <NavLink to="page-one" className="item">
          Page 1
        </NavLink>
        <NavLink to="page-two" className="item">
          Page 2
        </NavLink>
        <NavLink to="page-three" className="item">
          Page 3
        </NavLink>
      </div>
    </nav>
  )
}

export default HorizontalTextMenu
