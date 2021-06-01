import Head from 'next/head'
import styled from 'styled-components';
import {useContext, useState, useEffect} from 'react';
import slangs from '../data';
import slangData from '../data.json';
import Search from '../components/Search';
import Slang from '../components/Slang';
import {bp} from '../styles/design_system/border-shadow-gutters-bp';
import colorSchemes from '../styles/design_system/colors';
import Modal from "react-modal";
import {ThemeContext, TipsContext} from '../context/ThemeContext'
import CopyOutline from '../components/Icons/CopyOutline';
// https://buttercms.com/blog/next-js-tutorial-blog-styled-components
export default function Home() {
  const addresses = [
    {
      cryptoName: 'Doge',
      add: 'DKgV6CPp64cwDRv6goCGJX73KHywqyhznx',
    },
    {
      cryptoName: 'Etherium',
      add: '0xbadbe3d1346449ade7e6b47636152613e558f12f',
    },
    {
      cryptoName: 'Bitcoin',
      add: '3Nm7Vv7697zKtLV2LwPyXqvjWYsaKdULwe'
    }
  ]
  const {colorMode, setColorMode} = useContext(ThemeContext);
  const {tipsModalOpen, setTipsModalOpen} = useContext(TipsContext);
  const [slangIndex, setSlangIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('')
  // Search Index
  const [allData,setAllData] = useState(slangData);
  const [filteredData,setFilteredData] = useState(allData);
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
      overflow: 'hidden',
      // width: '100%'
    }
  };

  useEffect(() => {
    let value = searchInput
    let result = [];
    // console.log(searchInput)
    if(searchInput===""){
      setFilteredData(allData)
    } else {
      result = allData.filter((data) => {
          return data.slang.toLowerCase().search(value) != -1;
      });
      // console.log(allData)
      // console.log(result)
      setFilteredData(result);
    }
  }, [searchInput])

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function closeModal(){
    setIsOpen(false);
  }

  function closeTipsModal(){
    setTipsModalOpen(false);
  }

  return (
    <div>
      <Head>
        <title>crypto-slang</title>
        <meta name="description" content="cryptocurrency slangs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search setSearchInput={setSearchInput} searchInput={searchInput} />
        <SlangsContainer>
          {filteredData.map((s,index) => (<Slang isOpen={isOpen} setIsOpen={setIsOpen} setSlangIndex={setSlangIndex} slang={s.slang} index={index} key={s.slang} />))}
        </SlangsContainer>
        {/* <button onClick={toggleModal}>open and close</button> */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Slang Info">
        <Heading>
          <TitleSlang>{slangData[slangIndex].slang}:
          </TitleSlang>
        </Heading>
        {slangData[slangIndex].fullForm !== '' ? (<FullForm>"{slangData[slangIndex].fullForm}"</FullForm>) : null}
        
        {/* <TitleSlang>{slangs[slangIndex].slang}:<FullForm>{slangs[slangIndex].fullForm}</FullForm></TitleSlang> */}
        
        <SlangInfo>{slangData[slangIndex].description}</SlangInfo>
      </Modal>

      <Modal
        isOpen={tipsModalOpen}
        onRequestClose={closeTipsModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Slang Info">
        {/* <TipsContainer> */}
        <TipsHeading>Send Tips!</TipsHeading>
        {addresses.map((address) => (
          <CryptoContainer key={address.add}>
            <AddressContainer>
              <LeftAdd>
                <CryptoName>{address.cryptoName}</CryptoName>
                <Add>{address.add}</Add>
              </LeftAdd>
              <CopyButton onClick={() =>  navigator.clipboard.writeText(address.add)}>
                <CopyOutline/>
              </CopyButton>
            </AddressContainer>
          </CryptoContainer>
        ))}
        {/* </TipsContainer> */}
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
`;
const FullForm = styled.p`
  display: inline-block;
  color:  ${props => props.theme.foregroundCell};
  text-align: left;
  font-size: var(--font-size-heading2);
`;
const SlangInfo = styled.p`
  color:  ${props => props.theme.foregroundCell};
  text-align: left;
  font-size: var(--font-size-modal-info);
  margin-bottom: var(--gutter-slang-tabs);
`;
const TipsHeading = styled.h2`
  margin-bottom: 12px;
  color:  ${props => props.theme.white};
  font-size: var(--font-size-modal-title);
`;
const CryptoContainer = styled.div``;
const CryptoName = styled.h3`
  font-size: var(--font-size-heading2);
  color: ${props => props.theme.white}
`;
const AddressContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    border-bottom: 1px solid ${props => props.theme.foregroundCell};
    width: 100%;
`;
const Add = styled.p`
    font-size: var(--font-size-body2);
    color: ${props => props.theme.foregroundCell};
    text-overflow: ellipsis;
    text-overflow: ellipsis;
    /* Required for text-overflow to do anything */
    white-space: nowrap;
    overflow: hidden;
`;
const LeftAdd = styled.div`
    min-width: 200px;
    max-width: 500px;
`;
const CopyButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px;
    box-shadow: none;
    /* margin-left: 12px; */
`;