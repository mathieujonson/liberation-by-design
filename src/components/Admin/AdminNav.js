import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class AdminNav extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/admin/questions" activeClassName="active">Questions</NavLink>
                <NavLink exact to="/admin/definitions" activeClassName="active">Definitions</NavLink>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // getDefinitions: () => dispatch(getDefinitions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminNav);