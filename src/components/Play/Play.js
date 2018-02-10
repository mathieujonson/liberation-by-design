import React, {Component} from 'react'
import {connect} from 'react-redux'
import Questions from './Questions.js'

class Play extends Component {
  componentDidMount() {
      document.title = 'Play - Liberation By Design'
  }

  render() {
    return (
      <div className="play-container">
          <h1>We're playing now!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare ex in turpis tempor tincidunt. Nulla at nisl eleifend, congue dui ut, blandit tellus. Maecenas ullamcorper mauris a arcu pellentesque, nec facilisis nibh volutpat. Quisque a nibh vel dui porttitor mollis eu in tortor. Quisque sed libero semper elit scelerisque facilisis. Quisque iaculis mauris pellentesque elit commodo, et sollicitudin eros auctor. Nullam velit dolor, ultrices ac ante eget, fermentum volutpat odio.</p>
          <Questions />
      </div>
    )
  }
}

export default connect(
)(Play)
