import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDefinitions} from '../../../actions/definitions';
import AdminNav from '../AdminNav'

class AdminDefinitions extends Component {
    componentWillMount() {
        this.props.getDefinitions()
    }

    render() {
            return (
                <div className="page-container">
                    <AdminNav />
                </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        // definitions: state.definitions,
        // state: state,
        // inProgress: state.definitions.inProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDefinitions: () => dispatch(getDefinitions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDefinitions);