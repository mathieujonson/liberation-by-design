import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getQuestions} from '../../actions/questions'
import {updateUser, updateQuestion} from '../../actions/user'


class Questions extends Component {

    constructor(props) {
        super(props);

        this.handleAnswerSelect = this.handleAnswerSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        // this.props.getQuestions().then(
        // onFulfilled => {
        //     console.log('***success*** ', onFulfilled)
        // }, 
        // onRejected => {
        //     console.log('***failure*** ', onRejected)
        // })
        let questionId = Object.keys(this.props.user.questions)[0]
        this.props.updateQuestion(questionId)
    }

    getSiblings(el, filter) {
        var siblings = [];
        el = el.parentNode.firstChild;
        do { if (!filter || filter(el)) siblings.push(el); } while (el = el.nextSibling);
        return siblings;
    }

    flipCard() {
        const nextBtn = document.querySelector('.btn--next');
        const card = document.querySelector('.card-container');
        card.classList.toggle('flip');
    }

    handleAnswerSelect(e) {
        let siblings = this.getSiblings(e.target)
        siblings.forEach( (sibling) => {
            sibling.classList.remove("answer--active")
        })
        e.target.classList.add('answer--active')
    }

    handleSubmit(e) {
        let selectedButton = document.querySelector('.answer--active')
        console.log('123876123876', selectedButton)
        if(selectedButton) {
            this.flipCard()
            let submitButton = document.querySelector('.btn--next')
            submitButton.textContent = 'Next'
            console.log(selectedButton.getAttribute('value'))
            let correct = false 
            let selectedAnswer = selectedButton.getAttribute('value')
            // if(selectedAnswer)

            let pointsElement = document.querySelector('.question__points')
            console.log('points ele', pointsElement)
            let points = pointsElement.getAttribute('value')
            console.log('points', points)
            let score = this.props.user.score + points
            this.props.updateUser(this.props.user.id, this.props.questions.questions, correct, points, score)
        }
    }

    handleNext() {

    }

    render() {
        

        let question = this.props.questions.questions[Object.keys(this.props.user.questions)[0]]

        let questionMarkup = <p>{question.question}</p>

        let pointsMarkup = question.points > 1 ? `${question.points} points` : `${question.points} point`;

        return (
            <div>
                <div className="card-container">
                    <div className="card">
                        <div className="card__side card__side--question">
                            <div className="question__text">
                                {questionMarkup}
                            </div>
                            <div className="question__info">
                                <div className="question__skill">{question.skill}</div>
                                <div className="question__points" value={question.points}>{pointsMarkup}</div>
                            </div>
                        </div>
                        <div className="card__side card__side--answer">
                            <div className="answer__text">
                                <p>{question.answer} by design</p>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="answer-buttons">
                    <button className="btn btn--answer btn--equity" value="equity" onClick={this.handleAnswerSelect}>Equity</button>
                    <button className="btn btn--answer btn--equality" value="equality" onClick={this.handleAnswerSelect}>Equality</button>
                    <button className="btn btn--answer btn--diversity" value="diversity" onClick={this.handleAnswerSelect}>Diversity</button>
                    <button className="btn btn--answer btn--inclusion" value="inclusion" onClick={this.handleAnswerSelect}>Inclusion</button>
                </div>
                <div className="game-nav">
                    <div className="btn btn-lg btn--next" onClick={this.handleSubmit}>Submit</div>
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
        inProgress: state.questions.inProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getQuestions: () => dispatch(getQuestions()),
        updateQuestion: (question) => dispatch(updateQuestion()),
        updateUser: (userId, questionId, answer, points, score) => dispatch(updateUser(userId, questionId, answer, points, score))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
