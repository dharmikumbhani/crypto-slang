import React from 'react'
import styled from 'styled-components'

export default function SubmitSlang() {
    return (
        <SubmitButton>
            +&nbsp;Submit new slang
        </SubmitButton>
    )
}
const SubmitButton = styled.button`
    display: block;
    background-color: ${props => props.theme.secondary2};
    border-radius: var(--border-radius-s);
    color: ${props => props.theme.white};
    padding: 6px 9px 8px 9px;
    margin-bottom: 12px;
`