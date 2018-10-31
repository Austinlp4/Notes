import React, { Component } from 'react';
import axios from 'axios';
import { SignupForm } from './SigninStyles';



class Signup extends Component {
    state = {
        username: '',
        password: ''
    };


    render() {
        return (
            <div>
                <SignupForm >
                   
                        <label>Username</label>
                        <input 
                          name='username'
                          value={this.state.username}
                          onChange={this.handleInputChange}
                          type='text'
                        />
                    
                        <label>Password</label>
                        <input 
                          name='password'
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          type='password'
                        />
                 
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </SignupForm>
            </div>
        );
    }

  
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = 'http://localhost:5000/register';
        axios
          .post(endpoint, this.state)
          .then(res => {
              console.log(res.data)
              localStorage.setItem('jwt', res.data.token);
              this.props.history.push('/notes');
          })
          .catch(err => {
              console.log('ERROR', err)
          })
    }
}

export default Signup;