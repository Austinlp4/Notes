import React from "react";

// import './SingleNote.css';
import { connect } from 'react-redux';  
import { deleteNote, setUpdateNote, getNotes } from '../store/actions';



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
                
        <div className='active' >
           <div className='buttons'>
            <button onClick={this.handleDeleteNote}>Delete</button>
            
            <button onClick={event => {
                event.preventDefault();
                this.goToUpdateNoteForm(event, this.state.note.title)
            }}>Update</button>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
            
        </div>
        
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes
});

export default connect(mapStateToProps, { deleteNote, setUpdateNote, getNotes })(SingleNote);