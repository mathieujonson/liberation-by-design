import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getQuestions, deleteQuestion} from '../../../actions/questions';
import AdminNav from '../AdminNav'


class Questions extends Component {
    componentWillMount() {
        this.props.getQuestions()
        document.title = 'Questions - Admin'
    }

    handleEdit(key) {
        console.log(key)
        return
        this.props.editQuestion(key)
    }

    handleDelete(key) {
        console.log(key)
        return
        this.props.deleteQuestion(key)
    }

    renderRow(question, key) {
        console.log("render key", key);
        return (
            <tr key={key}>
                <td>{question.question}</td>
                <td><i className="material-icons" onClick={(key) => {this.handleEdit(key)}}>mode_edit</i></td>
                <td><i className="material-icons" onClick={(key) => {this.handleDelete(key)}}>delete</i></td>
            </tr>
        )
    }

    render() {
        let rows = ''
        if(Object.keys(this.props.questions).length > 0) {
            rows = Object.keys(this.props.questions.questions).map((question, index) => {
                let key = Object.keys(this.props.questions.questions)[index]
                return (
                    this.renderRow(this.props.questions.questions[question], key)
                )
            })
        }

        return (
            <div className="page-container">
                <AdminNav />
                <div className="questions-container table-responsive">
                    <table className="table table-striped">
                        <tbody><tr>
                                <td>Question</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                            {rows}
                        </tbody>
                    </table>
                    <Link to="/admin/questions/new" className="button">Add New</Link>
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
        getQuestions: () => dispatch(getQuestions()),
        deleteQuestion: (key) => dispatch(deleteQuestion(key))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
