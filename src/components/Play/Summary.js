import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../../actions/questions'

class Summary extends Component {
    componentWillMount() {
        //does session exist?
        if (typeof this.props.user.id != 'undefined') {
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
        document.title = 'Summary - Liberation By Design'
    }

    render() {

        if (typeof this.props.userInProgress == 'undefined' || this.props.userInProgress) {
            return (<div>waiting</div>)
        }

        const allQuestions = this.props.user.questions;        
        let questionResponse = Object.keys(allQuestions).map(key =>
        { 
            allQuestions[key]
         }
        )

        return (
            <div className="summary">
                <div className="summary__text">
                    <h1>Thanks for playing!</h1>
                    <p>You got {this.props.user.score} points.</p>
                </div>
                <div class="summary__scores">
                    <p>Game summary:</p>
                    <ol>
                        <li>{questionResponse}</li>
                    </ol>
                </div>
                <div className="summary__share">
                    Share this game with a friend!
                </div>            
                <div className="survey-container">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeleRf1hZPZzzx2UoTpkjb-3PSRi1ngGqBEffpiu2LrSSHGxQ/viewform?embedded=true" width="700" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>                
                </div>
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
        getQuestions: () => dispatch(getQuestions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary)