import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getDefinitions} from '../../../actions/definitions';

class AdminDefinitions extends Component {
    componentWillMount() {
        this.props.getDefinitions()
    }

    render() {
            return (
                <h3>Definitions</h3>
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