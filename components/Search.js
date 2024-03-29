import React, {useState} from 'react'
import styled from 'styled-components'
import DarkModeIcon from '../components/Icons/DarkModeIcon';
import {bp} from '../styles/design_system/border-shadow-gutters-bp';

export default function Search({searchInput, setSearchInput}) {
    return (
        <SearchWrapper>
            <SearchInput onChange={(event)=> setSearchInput(event.currentTarget.value.toLowerCase())} type="search" placeholder='Search' />
        </SearchWrapper>
    )
}

const SearchWrapper = styled.div`
    max-width: 100%;

    @media only screen and (min-width: ${bp.desktop}) {
      transition: var(--transition-active);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
`;
const SearchInput =  styled.input`
/* Removing default Input Tags */
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
/* Normalising all browser Text input  fields */
    -moz-appearance: none;/* older firefox */
    -webkit-appearance: textfield; /* safari, chrome, edge and ie mobile */
    appearance: none; /* rest */
    display: block;
    max-width: 300px;
    padding-left: 42px;
    // border-radius: 10px;
    border: 0px solid #00000000;
    border-bottom-color: ${props => props.theme.secondary1};
    border-bottom-width: 2px;
    color: ${props => props.theme.foregroundText};
    /* PlaceHolder and input */
    text-overflow: ellipsis;
    text-align: left;
    font-size: var(--font-size-heading2);
    /* Icon */
    background: url('/svgs/searchFill.svg') no-repeat;
    background-origin: content-box, content-box;
    background-position: -34px 50%;
    /* line-height: normal; */
    line-height: 130%;

    transition: var(--transition-inactive);
    ::placeholder {
        color: ${props => props.theme.foregroundText};
        opacity: 0.5; /* Firefox */
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${props => props.theme.foregroundText}
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${props => props.theme.foregroundText}
    }
    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    transition: var(--transition-active);
    margin-bottom: var(--gutter-search-margin);

    :focus  {
        transition: var(--transition-active);
        outline: none;
        background-position: -34px 50%;
        box-shadow: var(--shadows-active);
        transform: perspective(500px) translateY(-8px);
    }
`;

// https://stackoverflow.com/questions/62241217/styling-reactcomponent-svg-with-styledcomponents
// https://stackoverflow.com/questions/62176521/react-svg-import-as-a-component-does-not-render
// https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js
// https://www.pinkdroids.com/blog/svg-react-styled-components/


//Final Resource:
//https://levelup.gitconnected.com/how-to-search-filter-through-data-in-react-26f1545fe3a1