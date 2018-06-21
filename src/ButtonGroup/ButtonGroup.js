// @flow
import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { StyledButtonLink } from "../ButtonLink/ButtonLink";
import { StyledButton } from "../Button/Button";
import type { Props } from "./ButtonGroup";

const StyledButtonGroup = styled.div`
  display: flex;

  & ${StyledButtonLink}, & ${StyledButton} {
    border-radius: ${({ connected }) => connected && "0"};
    margin-right: ${({ theme, connected }) => (connected ? "1px" : theme.spaceXSmall)};
  }

  & > *:first-child {
    border-radius: ${({ connected, theme }) =>
      connected &&
      `${theme.borderRadiusNormal} 0 0
      ${theme.borderRadiusNormal}`};
  }

  & > *:last-child {
    border-radius: ${({ connected, theme }) =>
      connected && `0 ${theme.borderRadiusNormal} ${theme.borderRadiusNormal} 0`};
    margin-right: 0;
`;

const ButtonGroup = ({ children, connected, theme = defaultTokens }: Props) => (
  <StyledButtonGroup theme={theme} connected={connected}>
    {children}
  </StyledButtonGroup>
);

export default ButtonGroup;
