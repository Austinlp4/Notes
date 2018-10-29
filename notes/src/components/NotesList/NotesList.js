import React from 'react';
// import './NoteList.css';
import SingleNote from '../../views/SingleNote';
import { NavLink } from "react-router-dom";
// import styled from 'styled-components';
import { Note } from './StyledNoteslist';
import { NoteContainer } from './StyledListContainer';

function NotesList(props) {
    if(!props.notesList || !props.notesList.length) {
        return <h1>Make Your First Note!</h1>
    }
    
    return (
        <NoteContainer style={{ display: 'flex', flexWrap: 'wrap'}}>
            {props.notesList.map((note, index) => (  
                <Note key={index}>
                   <NavLink to={`notes/${note.title}`} activeClassName='active'>      
                    <SingleNote  noteId={note.title} {...props} note={note}/>      
                    </NavLink>  
                </Note> 
            ))}
        </NoteContainer>
    );
}

export default NotesList;