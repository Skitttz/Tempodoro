import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  font-family: "Kode Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};
  gap: 1rem;

  span{
    color:  ${(props) => props.theme["white-200"]};
    background: ${(props) => props.theme["gray-750"]};
    padding: 2rem 1rem;
    border-radius: 8px;
    user-select: none;
  }
`;


export const PointerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    user-select: none;
    padding: 0%;
    height: 60px;
    line-height: 0%;
    background: transparent;
    -webkit-text-stroke: 2px ${(props) => props.theme["yellow-300"]};
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;