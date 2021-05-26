// components/Layout.js
import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header';
import styled from 'styled-components';
import {bp} from '../../styles/design_system/border-shadow-gutters-bp';

export default function Layout(props) {
    
    return (
        <>
        <StyledLayout>
            <Header/>
                <MainContent>
                    {props.children}
                </MainContent>
            <Footer />
        </StyledLayout>
        </>
    )
}
const StyledLayout= styled.div`
    transition: var(--transition-inactive);
    overflow-x: hidden;
    padding: var(--gutter-screen-TB) var(--gutter-screen) 16px;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.background};
    @media only screen and (min-width: ${bp.tablet}) {
        padding: 0px var(--gutter-screen) 16px;
        transition: var(--transition-active);
    }
`;
const  MainContent = styled.main`
    /* 58+0+83+16 */
    /* 72+0+83+16 */
    min-height: calc(100vh - (var(--gutter-screen-TB) + var(--gutter-header-margin) + 171px));
    padding: 0px var(--gutter-main-content);
    @media only screen and (min-width: ${bp.tablet}) {
        /* 108+0+83+16 */
        min-height: calc(100vh - (var(--gutter-screen-TB) + var(--gutter-header-margin) + 207px));
        transition: var(--transition-active);
    }
`;