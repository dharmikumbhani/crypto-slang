import React from 'react'
import styled from 'styled-components';

export default function Slang({slang}) {
    return (
        <Tab>
            {/* <li> */}
                <a href="#">
                    {slang}
                </a>
            {/* </li> */}
        </Tab>
    )
}

const Tab = styled.li`
    /* padding: 0px 6px 6px 6px; */
    padding: 6px;
    display: block;
    background-color: ${props => props.theme.foregroundCell};
    list-style-type: none;
    font-size: var(--font-size-heading2);
    margin-right: var(--gutter-slang-tabs);
    margin-bottom: calc(10px + var(--gutter-slang-tabs));
    border-radius: var(--border-radius-m);
    color: ${props => props.theme.foregroundText};
    box-shadow: var(--shadow-normal);
    transition: var(--transition-inactive);
    line-height: normal;
    :hover{
        transition: var(--transition-active);
        transform: perspective(500px) translateY(-10px) translateZ(2px);
        /* box-shadow: var(--shadow-hover); */
        box-shadow: 0px 0.2px 20px #00000020;
        /* margin-right: 24px;
        margin-bottom: 24px; */
    }

`;
// https://paxful.com/blog/cryptocurrency-slangs-for-beginners/