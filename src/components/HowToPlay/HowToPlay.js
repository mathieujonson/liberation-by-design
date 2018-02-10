import React, {Component} from 'react'
import {connect} from 'react-redux'

class HowToPlay extends Component {
  componentDidMount() {
      document.title = 'How To Play - Liberation By Design'
  }

  render() {
    return (
      <div>
        How to play Liberation By Design.
      </div>
    )
  }
}

export default connect(
)(HowToPlay)
