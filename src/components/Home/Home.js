import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  componentDidMount() {
      document.title = 'Liberation By Design'
  }

  render() {
    return (
      <div>
        Liberation By Design Landing Page
      </div>
    )
  }
}

export default connect(
)(Home)
