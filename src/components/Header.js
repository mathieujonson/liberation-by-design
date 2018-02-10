import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default (props) => (
  <header className="page-header">
      <h1>
          <Link to="/">Liberation By Design</Link>
      </h1>
      <nav>
          <NavLink exact to='/' activeClassName="active">Home</NavLink>
          <NavLink exact to='/how-to-play' activeClassName="active">How To Play</NavLink>
          <NavLink exact to='/our-definitions' activeClassName="active">Our Definitions</NavLink>
          <NavLink exact to='/play' activeClassName="active">Play</NavLink>
      </nav>
  </header>
)
