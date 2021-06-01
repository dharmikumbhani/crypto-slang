import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import SponsorIcon from '../../Icons/SponsorIcon';
import TwitterFilledIcon from '../../Icons/TwitterFilledIcon';
import GithubFilledIcon from '../../Icons/GithubFilledIcon';
import Link from 'next/link';
import {TipsContext} from '../../../context/ThemeContext'

export default function GrowthActions({action}) {
    const [link, setLink] = useState('')
    const {tipsModalOpen, setTipsModalOpen} = useContext(TipsContext);
    useEffect(() => {
        if(action === 'twitter') {
            setLink('https://twitter.com/DharmiKumbhani')
        } else if(action === 'github') {
            setLink('https://github.com/dharmikumbhani/crypto-slang')
        } else if (action === 'sponsor') {
            setLink('#')
        }
    }, [action])

    function checkAndToggle(){
        if(action === 'sponsor'){
            setTipsModalOpen(!tipsModalOpen)
        } else {
            null
        }
    }
    return (
        <Link href={link} passHref={true}>
            <Button onClick={checkAndToggle}>
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