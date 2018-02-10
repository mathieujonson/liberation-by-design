import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import Dashboard from './Dashboard'
import { Route, Redirect } from 'react-router'
import {getLogin} from '../../actions/login'


class Index extends Component {
  
    render() {
        const markup = this.props.login ? <Dashboard /> : <Login />
        
        return (
            <div>
            {markup}
            </div>
        );
    }  
} 

function mapStateToProps(state) {
    return {
        login: state.login,
        state: state
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getLogin: (email, password) => dispatch(getLogin(email, password))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Index);