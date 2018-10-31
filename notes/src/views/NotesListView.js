import React from 'react';
import { connect } from 'react-redux';
import { getNotes, searchNote } from '../store/actions/index';
import NotesList from '../components/NotesList/NotesList';
import SearchBar from '../components/Search/Search';
import styled from 'styled-components';
import axios from 'axios';
import Pagination from "react-js-pagination";


const Container = styled.div`
  form{
    display: flex;
    justify-content: center;
  }
  ul{
      display: flex;
      flex-direction: row;
      color: rgb(66, 244, 78);
      justify-content: space-between;
      width: 90%;
      font-weight: medium;
      font-size: 20px;
      li {
        list-style-type: none;
        color: rgb(66, 244, 78);
      }
      a{
        color: rgb(66, 244, 78);
        text-decoration: none;
    }
  }
`

class NotesListView extends React.Component {
        state = {
            searchInput: '',
            hidden: false,
            activePage: 1
        }
    
    componentDidMount() {
        // this.props.notesList;
      
        if(this.props.notesList.length === 0){
            this.props.getNotes();
        } 
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
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
        this.props.history.push('/results');
      };

    render() {
        return (
            <Container>
            <SearchBar searchInput={this.state.searchInput} 
            searchNotes={this.searchNotes} 
            searchSubmit={this.searchSubmit} 
            {...this.props}/>
            <NotesList            
            {...this.props} />
            <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={9}
                totalItemsCount={this.props.notesList.length}
                pageRangeDisplayed={4}
                onChange={this.handlePageChange}
                
            />
            </Container>
        );
    }
    
}

const mapStateToProps = state => ({
    notesList: state.notes,
    results: state.results
});

export default connect(mapStateToProps, { getNotes, searchNote })(NotesListView);