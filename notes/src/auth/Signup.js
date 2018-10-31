import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SignupForm = styled.form`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 800px;
        height: 500px;
        margin-top: 50px;
        h2{
            color: green;
            font-size: 40px;
            font-family: 'Orbitron', sans-serif;
        }
        label{
            color: green;
            font-size: 20px;
            font-family: 'Orbitron', sans-serif;
            margin: 3%;
        }
        button{
            height: 50px;
            color: white;
            width: 250px;
            border: none;
            background-color: rgb(42,48,43);
            margin: 6% 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            text-align: center;
            box-shadow: 5px 5px 5px rgba(0, 255, 60, 0.5);
            &:hover{
                background-color: rgba(48,57,50, 0.8);
                box-shadow: 2px 2px 2px rgba(0, 255, 60, 0.5);
            }
        }
        input, textarea {
            padding: 2%;
            width: 250px;
            height: 35px;
            border-radius: 12px;
            padding-left: 1%;
            border: 1px solid rgba(0, 255, 60, 0.5);
            color: rgb(66, 244, 78);
            font-family: 'Orbitron', sans-serif;
            font-size: 18px;
            &:-webkit-autofill {
                background-color: rgb(66, 244, 78) !important;
            }
            &:focus {
                outline: none;
                box-shadow: inset 0 0 15px rgba(15, 246, 254, 0.7);
                background-color: rgba(29, 136, 135, 0.5)
            }
            background-color: rgb(33,38,34);
            &::-webkit-input-placeholder{
                text-align: center;
            }
        }
        textarea {
            height: 300px;
        }
`

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