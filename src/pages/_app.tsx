import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../core/constants/theme'

import GlobalStyle from '~/styles/global'
import { Poppins } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
})

function RickAndMorty({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default RickAndMorty
