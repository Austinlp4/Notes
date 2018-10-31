import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { SigninForm } from './SignupStyles';

class Signin extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
        <Fragment>
      <SigninForm autocomplete='off'>
        
          <label htmlFor="username">Username</label>
          <input
            autocomplete='off'
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            type="text"
          />
        
       
          <label htmlFor="password">Password</label>
          <input
            autocomplete='off'
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
          />
      
        
          <button onClick={this.handleSubmit}>Sign In</button>
        
      </SigninForm>
      </Fragment>
    );
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:5000/login/';
    console.log(this.state);
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/notes');
      })
      .catch(err => {
        console.error('ERROR', err);
      });
  };
}

export default Signin;