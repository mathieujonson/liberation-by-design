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
        document.title = 'Summary - Liberation By Design';

        //load the JavaScript SDK
        (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

        
    render() {

        if (typeof this.props.userInProgress == 'undefined' || this.props.userInProgress) {
            return (<div>waiting</div>)
        }

        const allQuestions = this.props.user.questions;        
        const questionSummary = Object.keys(allQuestions).map(key =>
        { 
            const questionIcon = allQuestions[key].correct ? `fa fa-check` : `fa fa-times`
            return (
                <li key={key}><i className={questionIcon}></i> <span className="summary__points">{allQuestions[key].points} points</span></li>
            )
         }
        )

        return (
            <div className="summary">
                <div id="fb-root"></div>
                <div className="summary__text">
                    <h1>Thanks for playing!</h1>
                    <p>You got {this.props.user.score} points.</p>
                </div>
                <div className="summary__scores">
                    <p>Game summary:</p>
                    <ol>
                        {questionSummary}
                    </ol>
                </div>
                <div className="summary__share">
                    <p>Share this game with a friend!</p>
                    {/* Facebook */}
                    <div className="fb-share-button" data-href="https://liberation-by-design.firebaseapp.com/" data-layout="button" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fliberation-by-design.firebaseapp.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
                </div>            
                <div className="survey-container">
                    <p>Before you go, please take our short survey!</p>
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