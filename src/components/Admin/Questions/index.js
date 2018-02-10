import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getQuestions} from '../../actions/questions';


class Questions extends Component {
    componentWillMount() {
        this.props.getQuestions()
        document.title = 'Questions - Admin'

    }

    render() {
        let list = ''

        if(Object.keys(this.props.questions).length > 0) {
            list = this.props.definitions.definitions.map((definition, index) => {
                return (
                    <li key={index}><strong>{definition.term}</strong>: {definition.definition}</li>
                )
            })
        }

        return (
            <div className="our-definitions-container">
                <table>
                    <tr><td></td></tr>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getQuestions: () => dispatch(getQuestions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
