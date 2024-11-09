import styled from "styled-components";


export const DefaultCountdownButton = styled.button`
  min-width: 400px;
  border: 0;
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  color: ${(props) => props.theme['white-200']};
  cursor: pointer;

  transition: background-color 0.2s ease,opacity 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width:31.25rem) {
    min-width: 250px;
  }
`;



export const StartCountdownButton = styled(DefaultCountdownButton)`
  background: ${(props) => props.theme.green};
  opacity: 1;
  &:not(:disabled):hover {
    opacity: 0.8;
  }
`

export const StopCountdownButton = styled(DefaultCountdownButton)`
  background: ${(props) => props.theme['red-500']};
  &:focus{
    box-shadow: 0 0 0 2px ${((props) => props.theme["red-500"])}
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`