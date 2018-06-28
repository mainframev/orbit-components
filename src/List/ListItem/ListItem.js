// @flow
import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import CircleSmall from "../../icons/CircleSmall";
import type { Props } from "./ListItem";

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spaceXSmall};

  &:only-child {
    margin: 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin-right: ${({ theme }) => theme.spaceXSmall};
`;

const ListItem = ({ children, icon = <CircleSmall />, theme = defaultTokens }: Props) => (
  <Item theme={theme}>
    <IconContainer theme={theme}>{icon}</IconContainer>
    {children}
  </Item>
);

export default ListItem;
