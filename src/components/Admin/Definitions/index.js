import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDefinitions, deleteDefinition} from '../../../actions/definitions';
import AdminNav from '../AdminNav'
import {Link} from 'react-router-dom'

class AdminDefinitions extends Component {
    componentWillMount() {
        this.props.getDefinitions()
    }   

    // handleEdit(key) {               
    //     this.props.history.push(`/admin/definitions/edit?key=${key}`)
    // }

    handleDelete(key) {
        this.props.deleteDefinition(key)
    }

    renderRow(definition, index, key) {
        return (
            <tr key={index}>
                <td>{definition.term}</td>
                <td>{definition.definition}</td>
                <td><i className="material-icons" onClick={(key) => {this.handleEdit(key)}}>mode_edit</i></td>
                <td><i className="material-icons" onClick={(key) => {this.handleDelete(key)}}>delete</i></td>
            </tr>
        )
    }

    render() {
        let rows = ''

        if(Object.keys(this.props.definitions).length > 0) {
            rows = Object.keys(this.props.definitions.definitions).map((definition, index) => {
                let key = Object.keys(this.props.definitions.definitions)[index]
                    return (
                    this.renderRow(this.props.definitions.definitions[definition], index, key)
                )
            })
        }

        return (
            <div className="page-container">
                <AdminNav />
            <div className="admin-definitions">
                <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>Term</td>
                        <td>Definition</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                    {rows}
                </tbody>
            </table>
            <Link to='/admin/definitions/new' className="button">New</Link>
            </div>
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
        getDefinitions: () => dispatch(getDefinitions()),
        deleteDefinition: (key) => dispatch(deleteDefinition(key))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDefinitions);