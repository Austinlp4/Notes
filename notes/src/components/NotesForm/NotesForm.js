import React, { Fragment } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    h2{
        color: green;
        font-size: 40px;
        font-family: 'Orbitron', sans-serif;
    }
    h3{
        color: green;
        font-size: 20px;
        font-family: 'Orbitron', sans-serif;
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


function NotesForm(props) {
    function handleSubmit(event) {
        event.preventDefault();

        if(props.isUpdating) {
            props.handleUpdateNote();
        } else {
            props.handleAddNewNote(event);
        }
    }

    return (
        <Fragment>
            
            <FormContainer>
            <h2>{props.isUpdating ? 'Update Note' : 'Create New Note'}</h2>
                <h3>Title:</h3>
                <input
                    type='text'
                    value={props.note.title}
                    name='title'
                    onChange={props.handleChange}
                    className='title-input'
                />
                <h3>Note:</h3>
                <textarea
                    type='text'
                    value={props.note.content}
                    name='content'
                    onChange={props.handleChange}
                    className='text-input'
                ></textarea>
                <button onClick={handleSubmit}>Add Note</button>
            </FormContainer>
        </Fragment>
    );
}

export default NotesForm;