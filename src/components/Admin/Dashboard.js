import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import AdminDefinitions from '../Definitions/Definitions';

class Dashboard extends Component {
    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //       displayComponent: "definitions"
    //     };
    // }

    componentDidMount() {
        // Update page title
        document.title = 'Admin - Liberation by Design'
    }
    
    renderComponent() {
        // const displayComponent = props.dislayComponent
        const view = 'definitions'

        switch (view) {
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

    handleNav(componentToDisplay) {
        // this.setState({displayComponent: componentToDisplay})
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
                    {this.renderComponent()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // displayComponent: state.displayComponent
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // getDefinitions: () => dispatch(getDefinitions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);