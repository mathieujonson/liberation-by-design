import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getQuestions} from '../../../actions/questions';
import AdminNav from '../AdminNav'


class Questions extends Component {
    componentWillMount() {
        this.props.getQuestions()
        document.title = 'Questions - Admin'

    }

    renderRow(question, index) {
        return (
            <tr key={index}>
                <td>{question.question}</td>
                <td><i className="material-icons">mode_edit</i></td>
                <td><i className="material-icons">delete</i></td>
            </tr>
        )
    }

    render() {
        let rows = ''

        if(Object.keys(this.props.questions).length > 0) {
            rows = this.props.questions.questions.map((question, index) => {
                return (
                    this.renderRow(question, index)
                )
            })
        }

        return (
            <div className="page-container">
                <AdminNav />
                <div className="our-definitions-container table-responsive">
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Question</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getQuestions: () => dispatch(getQuestions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
