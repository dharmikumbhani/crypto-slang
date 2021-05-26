import React from 'react'
import styled from 'styled-components'
import SponsorIcon from '../../Icons/SponsorIcon';
import TwitterFilledIcon from '../../Icons/TwitterFilledIcon';
import GithubFilledIcon from '../../Icons/GithubFilledIcon';

export default function GrowthActions({action}) {
    return (
        <Button>
            {action === 'sponsor' ? (<SponsorIcon/>) : action === 'twitter' ? <TwitterFilledIcon /> : <GithubFilledIcon />}
        </Button>
    )
}
const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background-color: ${props => props.theme.secondary2};
    border-radius: var(--border-radius-s)
`;