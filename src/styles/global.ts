import { NextFont } from 'next/dist/compiled/@next/font'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    ${({ theme }) => `
      background-color: ${theme.colors.background_900};
    `}

    color: white;

    scroll-behavior: smooth;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

    font-family: 'Poppins', sans-serif;
  }

  a{ 
    text-decoration: none !important;
  }

  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.background_900};
  }
  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray_600};
      border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.0);
  }

  // toast background
  .Toastify__toast-theme--dark{
    background-color: ${({ theme }) => theme.colors.background_700_08};
    backdrop-filter: blur(12.5px);
    border-radius: 5px;
  }
`

export default GlobalStyle
