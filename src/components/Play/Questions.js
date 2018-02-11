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

    componentDidMount() {
        document.title = 'Our Questions - Liberation By Design'
    }

    render() {
        let question = this.props.questions.questions[this.props.user.questions[0]]

        let questionMarkup = <li>{question.question}</li>

        return (
            <div className="our-questions-container">
                <ul>
                    {questionMarkup}
                </ul>
                <Link to='/play' className="button">Submit</Link>
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
