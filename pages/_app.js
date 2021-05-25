import {createGlobalStyle, ThemeProvider} from 'styled-components';
import reset from '../styles/design_system/reset';
import {ThemeContext, ThemeContextProvider} from '../context/ThemeContext'


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
  
  return (
    <>
      <ThemeContextProvider>
          <GlobalStyle />
          <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}

export default MyApp
