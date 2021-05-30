import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import {useContext} from 'react';
import slangs from '../data';
import Search from '../components/Search';
import Slang from '../components/Slang';
import {bp} from '../styles/design_system/border-shadow-gutters-bp';

const HeaderTitle = styled.h1`
  font-size: var(--font-size-heading1);
  color: ${props => props.theme.secondary1};;
`
// https://buttercms.com/blog/next-js-tutorial-blog-styled-components
export default function Home() {

  return (
    <div>
      <Head>
        <title>crypto-slang</title>
        <meta name="description" content="cryptocurrency slangs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
        <SlangsContainer>
          {slangs.map(s => (<Slang slang={s.slang} />))}
        </SlangsContainer>
    </div>
  )
}

const SlangsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  @media only screen and (min-width: ${bp.desktop}) {
      transition: var(--transition-active);
      justify-content: center;
    }
`;

