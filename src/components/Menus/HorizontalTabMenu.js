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

const HorizontalTabMenu = props => {
  return (
    <nav className="hor-text-menu">
      <div className="ui top attached tabular menu">
        <NavLink to="/" className="active item" data-tab="first">
          Home
        </NavLink>
        <NavLink to="page-one" className="active item" data-tab="first">
          Page 1
        </NavLink>
        <NavLink to="page-two" className="item" data-tab="second">
          Page 2
        </NavLink>
        <NavLink to="page-three" className="item" data-tab="third">
          Page 3
        </NavLink>
      </div>
    </nav>
  )
}

export default HorizontalTabMenu
