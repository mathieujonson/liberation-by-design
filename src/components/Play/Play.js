import React, {Component} from 'react'
import {connect} from 'react-redux'
import Questions from './Questions'
import {addUser} from '../../actions/user'
import {getQuestions} from '../../actions/questions'

class Play extends Component {
  componentWillMount() {
    //does session exist?
    if(typeof this.props.user.id != 'undefined') {
      //if yes, load up game at next question
      console.log('***user logged in***', this.props.user.id)
    } else {
      //if no, get questions, create user, and start game
      this.props.getQuestions().then(
      onFulfilled => {
          this.props.addUser(onFulfilled.val())
      }, 
      onRejected => {
        // error
        // console.log('***failure*** ', onRejected)
      })
    }
  }

  componentDidMount() {
      document.title = 'Play - Liberation By Design'
  }

  render() {

    if(typeof this.props.userInProgress == 'undefined' || this.props.userInProgress) {
      return (<div>waiting</div>)
    }

    return (
      <div className="game-wrapper">
        <div className="scoreboard">
          <p>score: {this.props.user.score}</p>
        </div>
        <Questions />
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        questions: state.questions,
        user: state.user,
        state: state,
        questionsInProgress: state.questions.inProgress,
        userInProgress: state.user.inProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getQuestions: () => dispatch(getQuestions()),
        addUser: questions => dispatch(addUser(questions))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Play)