import styled from 'styled-components';

 export const Note = styled.div`
    margin: 2% 1%;
    display: flex;
    flex-direction: row;
    background-color: rgb(42,48,43);
    width: 200px;
    height: 200px;
    border: none;
    padding: .4% 1% 1% 1%;
    border-radius: 4px;
    box-shadow: 0 8px 6px -6px rgba(0, 255, 60, 0.3);
    &:hover{
        background-color: rgba(48,57,50, 0.8);
        box-shadow: 0 3px 2px -2px rgba(0, 255, 60, 0.5);
      }
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
        font-size: 30px;
    }
    p{
        font-size: 16px;
        /* hide text if it more than N lines  */
        overflow: hidden;
        /* for set '...' in absolute position */
        position: relative; 
        /* use this value to count block height */
        line-height: 1.2em;
        /* max-height = line-height (1.2) * lines max number (3) */
        max-height: 4.7em; 
        /* fix problem when last visible word doesn't adjoin right side  */
        /* text-align: justify; */
        /* place for '...' */
        margin-right: -1em;
        padding-right: 1em;
        color: cyan;
        &:before{
            /* points in the end */
            content: '';
            /* absolute position */
            position: absolute;
            /* set position to right bottom corner of block */
            right: 0;
            bottom: 0;
        }
        &:after{
            /* points in the end */
            content: '';
            /* absolute position */
            position: absolute;
            /* set position to right bottom corner of text */
            right: 0;
            /* set width and height */
            width: 1em;
            height: 1em;
            margin-top: 0.2em;

        }
    }
    button{
        display: none;
    }
`

