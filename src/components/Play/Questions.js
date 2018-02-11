import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getQuestions} from '../../actions/questions'


class Questions extends Component {
    componentWillMount() {
        // this.props.getQuestions().then(
        // onFulfilled => {
        //     console.log('***success*** ', onFulfilled)
        // }, 
        // onRejected => {
        //     console.log('***failure*** ', onRejected)
        // })
    }

    flipCard() {
        const nextBtn = document.querySelector('.btn--next');
        const card = document.querySelector('.card-container');
        nextBtn.onclick = function () {
            card.classList.toggle('flip');
        }
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
                                <div className="question__points">{pointsMarkup}</div>
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
                    <button className="btn btn--answer btn--equity">Equity</button>
                    <button className="btn btn--answer btn--equality">Equality</button>
                    <button className="btn btn--answer btn--diversity">Diversity</button>
                    <button className="btn btn--answer btn--inclusion">Inclusion</button>
                </div>
                <div className="game-nav">
                    <Link to='/play' className="btn btn-lg btn--next" onClick={this.flipCard}>Submit</Link>
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
        getQuestions: () => dispatch(getQuestions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
