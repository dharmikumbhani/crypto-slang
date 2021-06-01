import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components';
import useSound from 'use-sound';
import { SoundOnContext } from '../context/ThemeContext';
// import mediumPing from '../public'

export default function Slang({slang, index, setSlangIndex, isOpen, setIsOpen}){

    const {soundOn, setSoundOn} = useContext(SoundOnContext);
    const [soundVolume, setSoundVolume] = useState(0)
    const [soundVolumeClick, setSoundVolumeClick] = useState(0)


    useEffect(() => {
        if(soundOn) {
            setSoundVolume(0.2)
            setSoundVolumeClick(0.1)
        } else {
            setSoundVolume(0)
            setSoundVolumeClick(0)
        }
    }, [soundOn])

    const [play, { stop }] = useSound(
        '/sounds/quietPing.mp3',
        { volume: soundVolume}
    );
    const [playClick, { stopClick }] = useSound(
        '/sounds/loudPing.mp3',
        { volume: soundVolumeClick}
    );
    const [isHovering, setIsHovering] = React.useState(
        false
    );
    // https://github.com/joshwcomeau/use-sound

    
    return (
        <Tab onMouseEnter={() => {
            setIsHovering(true);
            play();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            stop();
          }}
          onClick={() => {
              setSlangIndex(index)
              setIsOpen(!isOpen)
              playClick()
          }}
            // onClick={console.log(index)}
          >
            {/* <a> */}
                {slang}
            {/* </a> */}
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
    cursor: pointer;
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