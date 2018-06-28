// @flow
import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import type { Props } from "./Badge";
import TYPE_OPTIONS from "./consts";

const Container = styled(({ className, children }) => <div className={className}>{children}</div>)`
  font-family: ${({ theme }) => theme.fontFamily};
  display: inline-flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 24px; // TODO: create token
  line-height: 24px; // TODO: create token
  width: ${({ circled }) => circled && "24px"}; // TODO: create token
  font-size: ${({ theme }) => theme.fontSizeTextSmall};
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  background-color: ${({ tokens, type }) => tokens.background[type]};
  color: ${({ tokens, type }) => tokens.color[type]};
  border-radius: 12px; // TODO: create token borderRadiusBadge
  padding: 0 8px;
`;

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  margin-right: 4px; // TODO: create token

  & svg {
    height: 16px;
    width: 16px;
    color: ${({ tokens, type }) => tokens.color[type]};
  }
`;

const Badge = (props: Props) => {
  const { type = TYPE_OPTIONS.NEUTRAL, theme = defaultTokens, icon, children } = props;

  // TODO: create tokens
  const tokens = {
    background: {
      [TYPE_OPTIONS.NEUTRAL]: theme.paletteCloudLight,
      [TYPE_OPTIONS.INFO]: theme.paletteBlueLight,
      [TYPE_OPTIONS.SUCCESS]: theme.paletteGreenLight,
      [TYPE_OPTIONS.WARNING]: theme.paletteOrangeLight,
      [TYPE_OPTIONS.CRITICAL]: theme.paletteRedLight,
      [TYPE_OPTIONS.DARK]: theme.paletteInkNormal,
    },
    color: {
      [TYPE_OPTIONS.NEUTRAL]: theme.paletteInkDark,
      [TYPE_OPTIONS.INFO]: theme.paletteBlueNormal,
      [TYPE_OPTIONS.SUCCESS]: theme.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING]: theme.paletteOrangeNormal,
      [TYPE_OPTIONS.CRITICAL]: theme.paletteRedNormal,
      [TYPE_OPTIONS.DARK]: theme.paletteWhite,
    },
  };

  return (
    <Container theme={theme} tokens={tokens} type={type} {...props}>
      {icon && (
        <IconContainer tokens={tokens} type={type}>
          {icon}
        </IconContainer>
      )}
      {children}
    </Container>
  );
};

export default Badge;
