import {createContext, useState} from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import colors from '../styles/design_system/colors';
import reset from '../styles/design_system/reset';
import typography from '../styles/design_system/typography';
import {borderRadius, shadows, bp} from '../styles/design_system/border-shadow-gutters-bp'


const GlobalStyle = createGlobalStyle`

  .ReactModal__Overlay {
      opacity: 0;
      transform: translateY(10px);
      transition: all 300ms ease-in-out;
  }
  .ReactModal__Overlay--after-open{
      transform: translateY(0px);
      opacity: 1;
      transition: all 400ms ease-in-out;
  }
  .ReactModal__Overlay--before-close{
      opacity: 0;
      transform: translateY(10px);
      transition: all 300ms ease-in-out;
  }

  .ReactModal__Content{
      opacity: 0;
      transform: translateY(10px);
      transition: all 300ms ease-in-out;
  } 
  .ReactModal__Content--after-open{
      transform: translateY(0px);
      opacity: 1;
  }
  .ReactModal__Content--before-close{
      opacity: 0;
      transform: translateY(10px);
      transition: all 300ms ease-in-out;
  }

  ${reset}
  @font-face {
      font-family: "CUFEL";
      src: url("/fonts/CUFEL.woff") format('woff');
      font-style: normal;
      font-weight: 300;
      font-display: swap;
  }
  html{
    box-sizing: border-box;
  }
  :root {
    /* Mobile */
    --font-size-heading1: 44px;
    --font-size-heading2: 28px;
    --font-size-heading3: 14px;
    --font-size-bodycopy1: 18px;
    --font-size-bodycopy2: 16px;
    --font-size-modal-title: 30px;
    --font-size-modal-info: 24px;

    /* Borders */
    --border-radius-l: ${borderRadius.mobile.L};
    --border-radius-m: ${borderRadius.mobile.M};
    --border-radius-s: ${borderRadius.mobile.S};

    /* Shadows Black */
    --shadow-normal: ${shadows.normal}; 
    --shadow-hover: ${shadows.hover};
    
    /* Transitions */
    --transition-inactive: all .2s ease-in;
    --transition-active: all .3s ease-out;

    /* Gutters */
    --gutter-screen: 12px; //Left and right spacing for Headers
    --gutter-screen-TB: 12px;
    --gutter-buttons: 12px;
    --gutter-slang-tabs: 12px;
    --gutter-main-content: 0px;
    --gutter-header-margin: 42px;
    --gutter-search-margin: 42px;

    /* Tablet */
    @media only screen and (min-width: ${bp.tablet}) {
      transition: var(--transition-active);

      --gutter-screen: 42px;
      --gutter-screen-TB: 0px;
      --gutter-buttons: 32px;
      /* --gutter-main-content: 0px; */
      --gutter-header-margin: 52px;
      --gutter-search-margin: 52px;
      
      --font-size-heading1: 88px;
      --font-size-heading2: 30px;
      --font-size-heading3: 20px;
      --font-size-modal-title: 38px;
      --font-size-modal-info: 30px;

      --border-radius-l: ${borderRadius.tablet.L};
      --border-radius-m: ${borderRadius.tablet.M};
      --border-radius-s: ${borderRadius.tablet.S};
      
    }

    /* Desktop */
    @media only screen and (min-width: ${bp.desktop}) {
      transition: var(--transition-active);
      
      --gutter-screen: 74px;
      --gutter-buttons: 32px;
      --gutter-slang-tabs: 24px;
      /* --gutter-main-content: 100px; //336-74 = 262 */
      --gutter-header-margin: 52px;
      --gutter-search-margin: 52px;
    }
  }
  h1, h2, h3, h4, h5, p, button, input, li {
    font-family: 'CUFEL';
  }
  h1 {
      text-align: left;
      font-size: var(--font-size-heading1);
      @media only screen and (min-width: ${bp.tablet}) {
        text-align: center;
        }
    }
  h2 {font-size: var(--font-size-heading2);}
  h3 {font-size: var(--font-size-heading3);}
  button{
    font-size: var(--font-size-bodycopy2);
    box-shadow: var(--shadow-normal);
    transition: var(--transition-inactive);
  }
  button:hover {
    transition: var(--transition-active);
    transform: perspective(500px) translateZ(20px);
    /* box-shadow: var(--shadow-hover); */
    box-shadow: 0px 0.2px 20px #00000020;
  }
  /* input {
    appearance: none;
  } */
`;


function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light';
}
export const SoundOnContext = createContext();
export const ThemeContext = createContext();
export const TipsContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const darkTheme = colors.dark;
    const lightTheme = colors.light;

    const [soundOn, setSoundOn] = useState(false);
    const [colorMode, rawSetColorMode] = useState('light');
    const [tipsModalOpen, setTipsModalOpen] = useState(false);
    
    const setColorMode = (value) => {
        rawSetColorMode(value);
        // Persist it on update
        window.localStorage.setItem('color-mode', value);
    };
    return (
        <SoundOnContext.Provider value={{soundOn, setSoundOn}}>
          <ThemeContext.Provider value={{ colorMode, setColorMode }}>
                    <TipsContext.Provider value={{tipsModalOpen, setTipsModalOpen}}>
              <ThemeProvider theme= {colorMode === 'dark' ? darkTheme : lightTheme} >
                  <GlobalStyle/>
                      {children}
              </ThemeProvider>
                    </TipsContext.Provider>
          </ThemeContext.Provider>
        </SoundOnContext.Provider>
    );
};