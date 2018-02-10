import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
      document.title = 'Liberation By Design'
  }

  render() {
    return (
      <div className="home-container">
          <h1>Welcome to Liberation By Design!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare ex in turpis tempor tincidunt. Nulla at nisl eleifend, congue dui ut, blandit tellus. Maecenas ullamcorper mauris a arcu pellentesque, nec facilisis nibh volutpat. Quisque a nibh vel dui porttitor mollis eu in tortor. Quisque sed libero semper elit scelerisque facilisis. Quisque iaculis mauris pellentesque elit commodo, et sollicitudin eros auctor. Nullam velit dolor, ultrices ac ante eget, fermentum volutpat odio.</p>
          <NavLink exact to='/how-to-play'>Get Started</NavLink>
      </div>
    )
  }
}

export default connect(
)(Home)
