import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router';
import Login from './Login'
import {getLogin} from '../../actions/login'


class Index extends Component {
  
    render() {        
        const markup = Object.keys(this.props.login).length > 0 ? <Redirect to="/admin/questions" push /> : <Login />
        
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