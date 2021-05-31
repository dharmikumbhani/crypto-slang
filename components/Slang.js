import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components';
import useSound from 'use-sound';
import { SoundOnContext } from '../context/ThemeContext';
// import mediumPing from '../public'

export default function Slang({slang}) {

    // const [play] = useSound('/sounds/quietPing.mp3');
    const {soundOn, setSoundOn} = useContext(SoundOnContext);
    const [soundUrl, setSoundUrl] = useState('')
    // const soundUrl = () => (soundOn?'/sounds/quietPing.mp3':'')ß
    
    useEffect(() => {
        if(soundOn) {
            setSoundUrl('/sounds/quietPing.mp3')
        } else {
            setSoundUrl('')
        }
    }, [soundOn])
    console.log('SoundsURL', soundUrl);

    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.2 }
    );
    const [isHovering, setIsHovering] = React.useState(
        false
    );

    
    return (
        <Tab onMouseEnter={() => {
            setIsHovering(true);
            play();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            stop();
          }} onClick={play}
          >
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
        transform: perspective(500px) translateY(-8px);
        /* box-shadow: var(--shadow-hover); */
        box-shadow: 0px 0.2px 20px #00000020;
        /* margin-right: 24px;
        margin-bottom: 24px; */
    }

`;
// https://paxful.com/blog/cryptocurrency-slangs-for-beginners/