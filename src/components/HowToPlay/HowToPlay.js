import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class HowToPlay extends Component {
  componentWillMount() {
      document.title = 'How To Play - Liberation By Design'
  }

  render() {
    return (
        <div className="how-to-play-container">
            <h1>Rules to the Game</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare ex in turpis tempor tincidunt. Nulla at nisl eleifend, congue dui ut, blandit tellus. Maecenas ullamcorper mauris a arcu pellentesque, nec facilisis nibh volutpat. Quisque a nibh vel dui porttitor mollis eu in tortor. Quisque sed libero semper elit scelerisque facilisis. Quisque iaculis mauris pellentesque elit commodo, et sollicitudin eros auctor. Nullam velit dolor, ultrices ac ante eget, fermentum volutpat odio.</p>
            <Link to='/our-definitions' className="button">Next</Link>
        </div>
    )
  }
}

export default connect(
)(HowToPlay)
