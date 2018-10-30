import React from 'react';
// import './NoteList.css';
import SingleNote from '../../views/SingleNote';
import { NavLink } from "react-router-dom";
// import styled from 'styled-components';
import { Note } from './StyledNoteslist';
import { NoteContainer } from './StyledListContainer';

function Results(props) {
  
        return(
        <NoteContainer style={{ display: 'flex', flexWrap: 'wrap'}}>
            {props.results.map((note, index) => (  
                <Note key={index}>
                   <NavLink to={`notes/${note.title}`} activeClassName='active'>      
                    <SingleNote  noteId={note.title} {...props} note={note}/>      
                    </NavLink>  
                </Note> 
            ))}
        </NoteContainer>
        )
    
    
    
}

export default Results;