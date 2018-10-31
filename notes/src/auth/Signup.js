import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    state = {
        username: '',
        password: ''
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input 
                          name='username'
                          value={this.state.username}
                          onChange={this.handleInputChange}
                          type='text'
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                          name='password'
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          type='password'
                        />
                    </div>
                </form>
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
          })
          .catch(err => {
              console.log('ERROR', err)
          })
    }
}

export default Signup;