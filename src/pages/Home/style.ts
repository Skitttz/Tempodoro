import { flexCenter, gapStyles } from "@styles/utils/generalStyles";
import styled from "styled-components";


export const HomeContainer = styled.main`
  flex: 1;
  ${flexCenter({})}  
  justify-content: center;

  form {
    ${flexCenter({})}
    ${gapStyles('3.5rem')}
  }
`;



