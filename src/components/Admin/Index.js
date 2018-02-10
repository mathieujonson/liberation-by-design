import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class AdminIndex extends Component {

    render() {
        return (
            <nav className="nav">
                <ul>
                    <li><NavLink exact to="/admin/definitions" activeClassName="active">Definitions</NavLink></li>
                    <li><NavLink exact to="/admin/questions" activeClassName="active">Questions</NavLink></li>
                    <li><NavLink exact to="/admin/users" activeClassName="active">Users</NavLink></li>
                </ul>
            </nav>

            // Show component based on url
        )
    }
}

function mapStateToProps(state) {
    return {
        // definitions: state.definitions,
        // state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // getDefinitions: () => dispatch(getDefinitions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminIndex);