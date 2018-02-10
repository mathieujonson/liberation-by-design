import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getQuestions} from '../../actions/questions';


class Questions extends Component {
    componentWillMount() {
        this.props.getQuestions()
    }

    componentDidMount() {
        document.title = 'Our Questions - Liberation By Design'
    }

    render() {
        let list = ''

        if(Object.keys(this.props.questions).length > 0) {
            list = this.props.questions.questions.map((question, index) => {
                return (
                    <li key={index}><strong>{question.term}</strong>: {question.question}</li>
                )
            })
        }

        console.log(list)

        return (
            <div className="our-questions-container">
                <h1>Our Questions</h1>
                <ul>
                    {list}
                </ul>
                <Link to='/play' className="button">Let's Play!</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
