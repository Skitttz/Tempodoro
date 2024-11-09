import { flexCenter } from "@styles/utils/generalStyles";
import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  ${flexCenter({'direction':'row'})}
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  @media (max-width: 67.5rem){
      font-size: 1rem;
      margin-top: 1rem;
    }
`;


const DefaultInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid ${(props) => props.theme['gray-600']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    transition: all 0.3s ease-in-out;
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }
`

export const TaskInput = styled(DefaultInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important; 
  }
  @media (max-width:40rem){
    max-width: 250px;
    width: 100%;
    flex: auto;
  }
`

export const MinutesInput = styled(DefaultInput)`
  width: 5rem;
  padding-left: 1rem;
  @media (max-width:40rem){ width: 4rem}
`