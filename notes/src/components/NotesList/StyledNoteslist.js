import styled from 'styled-components';

 export const Note = styled.div`
    margin: 2% 1%;
    display: flex;
    flex-direction: row;
    background-color: black;
    width: 200px;
    height: 200px;
    border: 1px solid gray;
    padding: .4% 1% 1% 1%;
    a{
        text-decoration: none;
        color: black;
        width: 100%;
        &:hover{
            text-decoration: none;
            color: black;
        }
    }
    h2{
        border-bottom: 1px solid lightgreen;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: cyan;
    }
    p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: cyan;
    }
    button{
        display: none;
    }
`

