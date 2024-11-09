import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${props => props.theme['container-main']};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  @media(max-width: 67.5rem){
    padding: 0 16px;
  }
`