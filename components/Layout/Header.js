import React, {useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import SoundOffIcon from '../Icons/SoundOffIcon';
import SoundOnIcon from '../Icons/SoundOnIcon';
import LightModeIcon from '../Icons/LightModeIcon';
import DarkModeIcon from '../Icons/DarkModeIcon';
import {ThemeContext, SoundOnContext} from '../../context/ThemeContext';
import {bp, BP} from '../../styles/design_system/border-shadow-gutters-bp';
import useWindowSize from '../hooks/useWindowSize';

export default function Header(props) {
    // const [soundOn, setSound] = useState(false);
    const {soundOn, setSoundOn} = useContext(SoundOnContext);
    const {colorMode, setColorMode} = useContext(ThemeContext);

    const windowSize = useWindowSize();
    const [size, setSize] = useState("22");
    
    useEffect(() => {
        console.log('use Effect triggered', windowSize)
        if(windowSize.width > BP.tablet) {
            setSize("32")
        } else {
            setSize("22")
        }
        // return () => {
        //     cleanup
        // }
    }, [size, windowSize.width])

    return (
        <>
        <HeaderGroup>
            <TitleSpace>
                <Heading>Crypto Slang</Heading>
                <SubHeading>the official resource to find meaning of crypto slangs</SubHeading>
            </TitleSpace>
            <ButtonsGroup>
                <SoundIcon onClick={() => {setSoundOn(!soundOn)}}>
                    {soundOn === false? <SoundOnIcon size={size} /> : <SoundOffIcon size={size} />}
                </SoundIcon>
                <ColorMode onClick={()=> colorMode === 'light' ? setColorMode('dark'): setColorMode('light')}>
                    {colorMode === 'light' ? <DarkModeIcon size={size}/> : <LightModeIcon size={size} />}
                </ColorMode>
            </ButtonsGroup>
        </HeaderGroup>
        </>
    )
}

const HeaderGroup = styled.header`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--gutter-header-margin);
    @media only screen and (min-width: ${bp.desktop}) {
        position: relative;
        justify-content: center;
    }
`;

const TitleSpace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: var(--transition-active);
    @media only screen and (min-width: ${bp.desktop}) {
        transition: var(--transition-active);
        align-items: center;
    }
`;
const Heading = styled.h1`color: ${props => props.theme.secondary1};`;
const SubHeading = styled.h3`color: ${props => props.theme.foregroundText}`;

const ButtonsGroup = styled.div`
    margin-left: var(--gutter-buttons);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: ${bp.desktop}) {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
    }
`;
const SoundIcon = styled.a`display: inline-block;`;
const ColorMode = styled.a`
    display: inline-block;
    margin-left: var(--gutter-buttons);
`;