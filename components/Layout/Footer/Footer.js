import React from 'react'
import styled from 'styled-components'
import GrowthActions from './GrowthActions'
import SubmitSlang from './SubmitSlang'

export default function Footer() {
    const actions = ['sponsor', 'twitter', 'github']
    return (
        <FooterGroup>
            <ButtonsGroup>
                <SubmitSlang />
                <ButtonsBottomGroup>
                    {actions.map(action => <GrowthActions key={action} action={action} />)}
                </ButtonsBottomGroup>
            </ButtonsGroup>
        </FooterGroup>
    )
}
const FooterGroup = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-bottom: var(--); */
`;
const ButtonsGroup = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ButtonsBottomGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;