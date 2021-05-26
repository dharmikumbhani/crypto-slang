import {createGlobalStyle, ThemeProvider} from 'styled-components';
import Layout from '../components/layout/Layout';
import {ThemeContext, ThemeContextProvider} from '../context/ThemeContext'


// export const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </>
  )
}

export default MyApp
