import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getQuestions} from '../../../actions/questions';
import AdminNav from '../AdminNav'


class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.getQuestions()
        document.title = 'New Question - Admin'
    }

    handleChange(event) {
        this.setState({[event.target.id] : event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className="question-container">
                <AdminNav />
                <div className="question-form-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="question">Question</label>
                            <input type="text" id="question" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="answer">Answer</label>
                            <input type="text" id="answer" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" onChange={this.handleChange} />
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="skill">Skill</label>
                                    <select type="text" id="skill" className="form-control" onChange={this.handleChange}>
                                        <option value="easy">Beginner</option>
                                        <option value="moderate">Moderate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="points">Points</label>
                                    <select type="text" id="points" className="form-control" onChange={this.handleChange}>
                                        <option value="1">Beginner</option>
                                        <option value="2">Moderate</option>
                                        <option value="3">Advanced</option>
                                    </select>
                                </div>
                            </div>
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
