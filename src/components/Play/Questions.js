import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getQuestions} from '../../actions/questions'


class Questions extends Component {
    componentWillMount() {
        this.props.getQuestions().then(
        onFulfilled => {
            console.log('***success*** ', onFulfilled)
        }, 
        onRejected => {
            console.log('***failure*** ', onRejected)
        })
    }

    componentDidMount() {
        document.title = 'Our Questions - Liberation By Design'
    }

    render() {
        // let list = ''
        let questionMarkup = ''

        if(Object.keys(this.props.questions).length > 0) {
            let question = this.props.questions.questions[1] 
            // console.log('*******', question)
            // list = this.props.questions.questions.map((question, index) => {
                // return (
            questionMarkup = <li><strong>{question.term}</strong>{question.question}</li>
                // )
            // })
        }

        // console.log(list)

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
