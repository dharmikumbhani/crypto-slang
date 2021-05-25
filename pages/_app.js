import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {useContext, createContext, useState} from 'react';
import reset from '../styles/design_system/reset';
import colors from '../styles/design_system/colors';
import {ThemeContext} from './hooks/ThemeContext'


const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
      font-family: "Trufel";
      src: url("/fonts/CUFEL.woff") format('woff');
      font-style: normal;
      font-weight: 300;
      font-display: swap;
  }
  html{
    box-sizing: border-box;
  }
`;

// export const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {

  const darkTheme = colors.dark;
  const lightTheme = colors.light;
  
  const [colorMode, rawSetColorMode] = useState('light');

  const setColorMode = (value) => {
    rawSetColorMode(value);
    // Persist it on update
    window.localStorage.setItem('color-mode', value);
  };
  
  return (
    <>
      <ThemeContext.Provider value={{ colorMode, setColorMode }} >
        <ThemeProvider theme= {colorMode === 'dark' ? darkTheme : lightTheme} >
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default MyApp
