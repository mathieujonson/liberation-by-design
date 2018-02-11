import React, {Component} from 'react'
import {connect} from 'react-redux'
import Questions from './Questions'
import {addUser} from '../../actions/user'

class Play extends Component {
  componentWillMount() {
    //does session exist?
    if(typeof this.props.user.id != 'undefined') {
      //if yes, load up game at next question
      console.log('***user logged in***', this.props.user.id)
    } else {
      //if no, get questions, create user, and start game
      console.log('***create new user***')
      this.props.addUser()
    }
  }

  componentDidMount() {
      document.title = 'Play - Liberation By Design'
  }

  render() {

    if(Object.keys(this.props.user).length > 0) {
      console.log('****', this.props.user)
    }

    console.log('***store***', this.props.state)

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

function mapStateToProps(state) {
    return {
        user: state.user,
        state: state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: () => dispatch(addUser())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Play)