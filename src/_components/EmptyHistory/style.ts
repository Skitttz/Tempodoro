import { HistoryContainer } from "@pages/History/style";
import styled from "styled-components";


export const EmptyHistoryContainer = styled(HistoryContainer)`
  justify-content: center;
  text-align: center;
`;

export const TypographEmpty = styled.h2`
  color: ${(props) => props.theme["gray-200"]}
`;