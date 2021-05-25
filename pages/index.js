import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import {useContext} from 'react';
import slangs from '../data';


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
        {slangs.map(slang => (<ul>{slang.slang}</ul>))}
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

