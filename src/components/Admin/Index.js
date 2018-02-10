import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
// import Definitions from '../Definitions/Definitions';

class AdminIndex extends Component {
    componentDidMount() {
        // Update page title
        document.title = 'Liberation by Design - Admin'
    }

    renderComponentToDisplay() {
        var componentName = document.URL.split('admin/')[1];
        switch (componentName) {
            case 'definitions':
                // return <Definitions />
                return <div>Definitions yo</div>
            case 'questions':
                // return <Questions />
                return <div>Questions yo</div>
            case 'users':
                // return <Users />
                return <div>Users yo</div>
        }
    }

    render() {
        return (
            <div className="page-container">
                    <nav>
                        <NavLink exact to="/admin/definitions" ClassName="active">Definitions</NavLink>
                        <NavLink exact to="/admin/questions" activeClassName="active">Questions</NavLink>
                        <NavLink exact to="/admin/users" activeClassName="active">Users</NavLink>
                    </nav>

                <div className="list-container">
                    {this.renderComponentToDisplay()}
                </div>
            </div>
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