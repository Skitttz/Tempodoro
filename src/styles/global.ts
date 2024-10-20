import { createGlobalStyle } from "styled-components";


export const GlobalStyle  = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    background-color: ${props => props.theme["gray-850"]};
    color: ${props => props.theme["white-200"]};
    -webkit-font-smoothing: antialiased;
    }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.green};
  }
  body,input,textarea,button{
    font-family: 'Inter',sans-serif;
    font-size: 1rem;
    font-weight: 400;
    
  }
`