import React from 'react';
import { connect } from 'react-redux';
import { getNotes, searchNote } from '../store/actions/index';
import SearchBar from '../components/Search/Search';
import styled from 'styled-components';
import Results from '../components/NotesList/Results'

const Container = styled.div`
  
  form{
    display: flex;
    justify-content: center;
  }
`

class ResultsListView extends React.Component {
        state = {
            searchInput: '',
            hidden: false
        }
    
    componentDidMount() {
        // this.props.notesList;
        if(this.props.notesList.length === 0){
            this.props.getNotes();
        } 
    }

    searchNotes = event => {
        this.setState({
          searchInput: event.target.value
        });
      }

      searchSubmit = event => {
        event.preventDefault();
        this.props.searchNote(this.state.searchInput);
        this.setState({searchInput: ''});
        this.history.push('/results');
      };

    render() {
        return (
            <Container>
            <SearchBar searchInput={this.state.searchInput} 
            searchNotes={this.searchNotes} 
            searchSubmit={this.searchSubmit} 
            {...this.props}/>
            <Results            
            {...this.props} />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes,
    results: state.results
});

export default connect(mapStateToProps, { getNotes, searchNote })(ResultsListView);