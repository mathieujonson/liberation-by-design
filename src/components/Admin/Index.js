import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import Dashboard from './Dashboard'
import { Route } from 'react-router'
import {getLogin} from '../../actions/login'


class Index extends Component {
  
    render() {        
        const markup = Object.keys(this.props.login).length > 0 ? <Dashboard /> : <Login />
        
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