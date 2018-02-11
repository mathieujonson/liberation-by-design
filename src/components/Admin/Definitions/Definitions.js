import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getDefinitions} from '../../../actions/definitions';

class AdminDefinitions extends Component {
    componentWillMount() {
        this.props.getDefinitions()
    }   

    renderRow(definition, index) {
        return (
            <tr key={index}>
                <td>{definition.term}</td>
                <td>{definition.definition}</td>
                <td><i className="material-icons">mode_edit</i></td>
                <td><i className="material-icons">delete</i></td>
            </tr>
        )
    }

    render() {
        let list = ''

        if(Object.keys(this.props.definitions).length > 0) {
            list = this.props.definitions.definitions.map((definition, index) => {
                return (
                    this.renderRow(definition, index)
                )
            })
        }

            return (
                <div className="admin-deffinitions">
                    <h3>Definitions</h3>   
                    <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td>Term</td>
                            <td>Definition</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                        {list}
                    </tbody>
                </table>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        definitions: state.definitions,
        state: state,
        inProgress: state.definitions.inProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDefinitions: () => dispatch(getDefinitions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDefinitions);