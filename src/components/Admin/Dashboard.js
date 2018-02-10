import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import AdminDefinitions from '../Definitions/Definitions';
import Definitions from './Definitions/Definitions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          displayComponent: "definitions"
        };
        console.log(this.state.displayComponent)
    }

    componentDidMount() {
        document.title = 'Admin - Liberation by Design'
    }
    
    renderComponent(displayComponent) {
        // const displayComponent = this.props.dislayComponent
        console.log(displayComponent);
        // const view = 'definitions'

        switch (displayComponent) {
            case 'definitions':
                // return <AdminDefinitions />
                return <div>Defs yo</div>
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
                        <NavLink exact to="/admin/definitions" activeClassName="active">Definitions</NavLink>
                        <NavLink exact to="/admin/questions" activeClassName="active">Questions</NavLink>
                        <NavLink exact to="/admin/users" activeClassName="active">Users</NavLink>
                    </nav>

                <div className="list-container">
                    {this.renderComponent(this.props.dislayComponent)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        displayComponent: state.displayComponent,
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // getDefinitions: () => dispatch(getDefinitions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);