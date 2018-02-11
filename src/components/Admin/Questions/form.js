import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getQuestions} from '../../../actions/questions';
import AdminNav from '../AdminNav'


class Questions extends Component {
    componentWillMount() {
        this.props.getQuestions()
        document.title = 'New Question - Admin'
    }

    handleChange() {

    }

    render() {
        return (
            <div className="question-container">
                <AdminNav />
                <div className="question-form-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="question">Question</label>
                            <input type="text" id="question" onChange={this.handleChange()} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="answer">Answer</label>
                            <input type="text" id="answer" onChange={this.handleChange()} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" onChange={this.handleChange()} />
                        </div>
                    </form>
                    <button className="button">Save</button>
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
