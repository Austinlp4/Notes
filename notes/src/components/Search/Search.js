import React from 'react';

import styled from 'styled-components';

const Search = styled.input`
  width: 250px;
  height: 35px;
  border-radius: 12px;
  padding-left: 1%;
  border: 1px solid rgba(0, 255, 60, 0.5);
  color: rgb(66, 244, 78);
  margin-top: 5%;
  font-family: 'Orbitron', sans-serif;
  &:focus {
    outline: none;
    box-shadow: inset 0 0 15px rgba(15, 246, 254, 0.7);
    background-color: rgba(29, 136, 135, 0.5)
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