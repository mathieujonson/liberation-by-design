import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class AdminNav extends Component {
    render() {
        const questionClass =   /question/i.test(window.location.pathname) ? 'active' : '',
              definitionClass = /definition/i.test(window.location.pathname) ? 'active' : ''

        return (
            <nav className="admin-nav">
                <NavLink exact to="/admin/questions" className={questionClass}>Questions</NavLink>
                <NavLink exact to="/admin/definitions" className={definitionClass}>Definitions</NavLink>
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