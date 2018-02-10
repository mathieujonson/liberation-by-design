import React, {Component} from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {connect} from 'react-redux'
import {getLogin} from '../../actions/login'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {    
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()    
    var authSuccess = this.props.getLogin(this.state.email, this.state.password)       
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);