import Head from 'next/head'
import Image from 'next/image'
import { createContext, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './hooks/ThemeContext';
import {useContext} from 'react';


const HeaderTitle = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.foregroundText};;
  font-family: 'Trufel';
`

export default function Home() {

  const {colorMode, setColorMode} = useContext(ThemeContext)

  return (
    <div>
      <Head>
        <title>crypto-slang</title>
        <meta name="description" content="cryptocurrency slangs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <HeaderTitle>Hello</HeaderTitle>
        <button onClick={() => ( colorMode === 'light' ? setColorMode('dark') : setColorMode('light'))}>Change theme</button>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

