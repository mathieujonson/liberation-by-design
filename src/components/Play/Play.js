import React, {Component} from 'react'
import {connect} from 'react-redux'
import Questions from './Questions.js'

class Play extends Component {
  componentWillMount() {
      document.title = 'Play - Liberation By Design'
  }

  render() {
    return (
      <div className="play-container">
          <div className="score">score:</div>
          <div className="question">
            <div className="question__index">question:</div>
            <Questions />
          </div>
      </div>
    )
  }
}

export default connect(
)(Play)
