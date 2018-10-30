import React from "react";

// import './SingleNote.css';
import { connect } from 'react-redux';  
import { deleteNote, setUpdateNote, getNotes } from '../store/actions';
import styled from 'styled-components';

const Single = styled.div`
   h2{
       color: green;
       font-size: 35px;
   }
   p {
       color: white;
       font-size: 20px;
   }

`
const Button = styled.button`
   height: 40px;
   width: 150px;
   color: white;
   background-color: rgb(42,48,43);
   box-shadow: 5px 5px 5px rgba(0, 255, 60, 0.5);
   border: none;
   margin: 5px;
   &:hover{
    background-color: rgba(48,57,50, 0.8);
    box-shadow: 2px 2px 2px rgba(0, 255, 60, 0.5);
  }
`

class SingleNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note: {},
            
        };
    }

    componentDidMount() {
        let myId;
        if(this.props.noteId) {
            myId=this.props.noteId;
        } else {
            myId = this.props.match.params.noteId;
        }
        const foundNote = this.props.notesList.find(note => note.title === myId);
        if(!foundNote) return;
        this.setState({ note: foundNote});

        // this.props.getNotes();
    }
    

    handleDeleteNote = () => {     
        this.props.deleteNote(this.state.note.id);
        console.log('Title: ', this.state.note.id);
        this.props.history.push('/notes');
    }

    goToUpdateNoteForm = (event,title) => {
        event.preventDefault();
        this.props.setUpdateNote(title);
        this.props.history.push('/notes-form');
    }

    handleClick = event => {
        event.preventDefault();
        this.setState({
            clicked: !this.state.clicked
        });
    }

    render() {
        const {title, content} = this.state.note
        return(
                
        <Single >
           <div className='buttons'>
            <Button onClick={this.handleDeleteNote}>Delete</Button>
            
            <Button onClick={event => {
                event.preventDefault();
                this.goToUpdateNoteForm(event, this.state.note.title)
            }}>Update</Button>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
            
        </Single>
        
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes
});

export default connect(mapStateToProps, { deleteNote, setUpdateNote, getNotes })(SingleNote);