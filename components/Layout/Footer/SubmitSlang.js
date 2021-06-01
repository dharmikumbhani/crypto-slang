import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';    

export default function SubmitSlang() {
    const SubmissionURL = 'https://forms.gle/hjYEWGzacgLwhXcK8';
    return (
        <Link href={SubmissionURL} passHref={true}>
            <SubmitButton onClick={()=> (window.location = "https://redirectsite.com")}>
                +&nbsp;Submit new slang
            </SubmitButton>
        </Link>
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