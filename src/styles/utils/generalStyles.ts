import { css } from "styled-components";

export const flexCenter = ({ direction = 'column', align = 'center'}) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
`;

export const gapStyles = (size : string) => css`
  gap: ${size};
`;

export const transitionOpacity = () => css`
  opacity: 1;

  &:not(:disabled):hover {
    opacity: 0.8;
  }
`;