import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  :focus {
  box-shadow: none;
  }   

  @media (max-width: 67.5rem){
      flex-direction: column;
      gap: 1rem;
    }

  nav {
    display: flex;
    gap: 0.5rem;
    a{
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: all .3s;
      outline: none;
      cursor: pointer;
      &:hover{
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
      &:focus{
        box-shadow: none;
      }
      &.disable{
        transition: all .4s;
        cursor: not-allowed;
        color: ${(props) => props.theme['gray-600']} 
      }
      &:hover.disable{
        border-bottom: 3px solid transparent !important; 
      }
      &.active{
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`