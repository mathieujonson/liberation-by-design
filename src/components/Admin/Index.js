import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class Index extends Component {

    render() {
        return (
            <nav className="nav">
                <NavLink exact to="/admin/definitions" activeClassName="active">Definitions</NavLink>
                <NavLink exact to="/admin/questions" activeClassName="active">Questions</NavLink>
                <NavLink exact to="/admin/users" activeClassName="active">Users</NavLink>
            </nav>

            // Show component based on url
        )
    }
}

function mapStateToProps(state) {
    return {
        definitions: state.definitions,
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDefinitions: () => dispatch(getDefinitions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Definitions);