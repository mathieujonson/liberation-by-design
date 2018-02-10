import React from 'react'
import { NavLink } from 'react-router-dom'

export default (props) => (
  <footer className="page-footer">
    <NavLink activeClassName="active" exact to='/'><i className="material-icons">home</i></NavLink>
    <NavLink activeClassName="active" to="/menu"><i className="material-icons">menu</i></NavLink>
  </footer>
)
