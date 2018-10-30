import React from 'react';

import styled from 'styled-components';

const Search = styled.input`
  width: 250px;
  height: 35px;
  border-radius: 12px;
  padding-left: 1%;
  border: 1px solid rgba(0, 255, 60, 0.5);
  color: white;
  margin-top: 5%;
  &:focus {
    outline: none;
  }
  background-color: rgb(33,38,34);
  &::-webkit-input-placeholder{
    text-align: center;
  }
`;

const SearchBar = (props) => {
    console.log(props);
    return (
        <form onSubmit={props.searchSubmit}>
        <Search value={props.searchInput} placeholder="Search" onChange={props.searchNotes} />
        </form>
    );
}

export default SearchBar;