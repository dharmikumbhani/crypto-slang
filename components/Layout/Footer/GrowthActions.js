import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import SponsorIcon from '../../Icons/SponsorIcon';
import TwitterFilledIcon from '../../Icons/TwitterFilledIcon';
import GithubFilledIcon from '../../Icons/GithubFilledIcon';
import Link from 'next/link';

export default function GrowthActions({action}) {
    const [link, setLink] = useState('')
    useEffect(() => {
        if(action === 'twitter') {
            setLink('https://twitter.com/DharmiKumbhani')
        } else if(action === 'github') {
            setLink('https://github.com/')
        } else if (action === 'sponsor') {
            setLink('#')
        }
    }, [action])
    return (
        <Link href={link} passHref={true}>
            <Button>
                {action === 'sponsor' ? (<SponsorIcon/>) : action === 'twitter' ? <TwitterFilledIcon /> : <GithubFilledIcon />}
            </Button>
        </Link>
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