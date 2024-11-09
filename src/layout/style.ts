import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${props => props.theme['container-main']};
  border-radius: 8px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 67.5rem){
    margin: 5rem 2rem;
  }

  @media (max-width: 40rem){
      margin: 3rem 1rem 1rem 1rem;
      height: calc(100vh - 8rem);
    }

  @media (max-width: 23rem){
      margin: 3rem .5rem .5rem .5rem;
    }
`