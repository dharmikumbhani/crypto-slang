import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import {useContext} from 'react';
import slangs from '../data';

const HeaderTitle = styled.h1`
  font-size: var(--font-size-heading1);
  color: ${props => props.theme.secondary1};;
`

export default function Home() {

  return (
    <div>
      <Head>
        <title>crypto-slang</title>
        <meta name="description" content="cryptocurrency slangs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main >
        {slangs.map(slang => (<ul>{slang.slang}</ul>))}
      </main>

    </div>
  )
}

