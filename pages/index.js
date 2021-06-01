import Head from 'next/head'
import styled from 'styled-components';
import {useContext, useState} from 'react';
import slangs from '../data';
import Search from '../components/Search';
import Slang from '../components/Slang';
import {bp} from '../styles/design_system/border-shadow-gutters-bp';
import colorSchemes from '../styles/design_system/colors';
import Modal from "react-modal";
import {ThemeContext} from '../context/ThemeContext'
// https://buttercms.com/blog/next-js-tutorial-blog-styled-components
export default function Home() {

  const {colorMode, setColorMode} = useContext(ThemeContext);
  const [slangIndex, setSlangIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      // marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border: '0px',
      backgroundColor: colorSchemes[colorMode].secondary2,
      minWidth: '350px',
      maxWidth: '500px',
      padding: '20px',
      borderRadius: '16px',
      // width: '100%'
    }
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function closeModal(){
    setIsOpen(false);
  }
  // console.log('index.js Slang', slangIndex)
  return (
    <div>
      <Head>
        <title>crypto-slang</title>
        <meta name="description" content="cryptocurrency slangs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
        <SlangsContainer>
          {slangs.map((s,index) => (<Slang isOpen={isOpen} setIsOpen={setIsOpen} setSlangIndex={setSlangIndex} slang={s.slang} index={index} key={s.slang} />))}
        </SlangsContainer>
        {/* <button onClick={toggleModal}>open and close</button> */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Slang Info">
        <Heading>
          <TitleSlang>{slangs[slangIndex].slang}:
          </TitleSlang>
        </Heading>
        {slangs[slangIndex].fullForm !== '' ? (<FullForm>"{slangs[slangIndex].fullForm}"</FullForm>) : null}
        
        {/* <TitleSlang>{slangs[slangIndex].slang}:<FullForm>{slangs[slangIndex].fullForm}</FullForm></TitleSlang> */}
        
        <SlangInfo>{slangs[slangIndex].description}</SlangInfo>
      </Modal>

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
const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;
const TitleSlang = styled.h3`
  display: inline;
  color:  ${props => props.theme.white};
  text-align: center;
  font-size: var(--font-size-modal-title);
  /* margin-bottom: 12px; */
  /* border-bottom: 1px solid ${props => props.theme.secondary1}; */
`;

const FullForm = styled.p`
  display: inline-block;
  color:  ${props => props.theme.foregroundCell};
  text-align: left;
  font-size: var(--font-size-heading2);
  /* margin-bottom: 12px; */
  /* margin-bottom: var(--gutter-slang-tabs); */
  /* border-bottom: 1px solid ${props => props.theme.secondary1}; */
`;

const SlangInfo = styled.p`
  color:  ${props => props.theme.foregroundCell};
  text-align: left;
  font-size: var(--font-size-heading2);
  margin-bottom: var(--gutter-slang-tabs);
`;
