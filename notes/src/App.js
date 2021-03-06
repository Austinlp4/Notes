import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import NotesListView from './views/NotesListView';
import NotesFormView from './views/NotesFormView';
import ResultsView from './views/ResultsView';
import SingleNote from './views/SingleNote';
import styled from 'styled-components';
import Signup from './auth/Signup';
import Signin from './auth/Signin';


const Nav = styled.div`
  
  height: 100vh;
  margin-top: 0;
  padding: 3%;
  background-color: rgb(33,38,34);
  box-shadow: 5px 5px 10px rgba(15, 246, 254, 0.5);
  margin-right: 2%;
  h1{
    color: rgba(48,57,50, 0.8);
    text-shadow: 2px 2px 2px rgb(15, 246, 254);
    text-align: center;
    font-size: 50px;
  }
  
  li{
    list-style-type: none;
  height: 50px;
  width: 200px;
  border: none;
  background-color: rgb(42,48,43);
  margin: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  text-align: center;
  box-shadow: 5px 5px 5px rgba(15, 246, 254, 0.5);
  &:hover{
    background-color: rgba(48,57,50, 0.8);
    box-shadow: 2px 2px 2px rgba(15, 246, 254, 0.5);
  }
  }
  a{
    text-decoration: none;
     color: white;
     &:hover{
      text-decoration: none;
      color: white;
     }
  }
`

class App extends Component {
  
  state={
      hidden: false
  }
  toggleHidden = () => {
    this.setState({ hidden: !this.state.hidden })
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }))
      
  }
  

  render() {
    if(localStorage.length === 0){
      return (
        <div className = 'App'>
        <Nav>
          <h1>Notes</h1>
          
          <li>
            <NavLink to='/register' onClick={this.toggleHidden}>           
              Register
            </NavLink>          
          </li>
          <li>
            <NavLink to='/login' onClick={this.toggleHidden}>           
              Login
            </NavLink>          
          </li>
          
        </Nav>
          <Route path='/register' component={Signup} />
          <Route path='/login' component={Signin} />
        </div>
      )
    }
    return (
      <div className="App">
        <Nav>
          <h1>Notes</h1>
          
          <li>
            <NavLink to='/notes' onClick={this.toggleHidden}>           
              View Your Notes
            </NavLink>
            
          </li>
          
          <li>
            <NavLink to='/notes-form'>
                + Create New Note
            </NavLink>
          </li>
        </Nav>
        <Route exact path='/notes' component={NotesListView} />
        <Route path= '/notes-form' component={NotesFormView} />
        <Route path='/notes/:noteId' component={SingleNote} />
        <Route path='/results' component={ResultsView} />
      </div>
    );
  }
}

export default withRouter(App);