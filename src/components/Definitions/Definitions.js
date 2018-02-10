import React, {Component} from 'react'
import {connect} from 'react-redux'

class Definitions extends Component {
  componentDidMount() {
      document.title = 'Our Definitions - Liberation By Design'
  }

  render() {
    return (
      <div>
        Definitions of our answer words.
      </div>
    )
  }
}

export default connect(
)(Definitions)
