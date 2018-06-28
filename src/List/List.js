// @flow
import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { SIZES, TYPES } from "./consts";
import type { Props } from "./List";
import { StyledCarrierLogo } from "../CarrierLogo/CarrierLogo";

const StyledList = styled(({ className, children }) => <div className={className}>{children}</div>)`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontfamily};
  font-size: ${({ tokens, size }) => tokens.fontSizes[size]};
  line-height: ${({ theme }) => theme.lineHeightText};
  color: ${({ tokens, type }) => tokens.colors[type]};

  // CarrierLogo images
  & ${StyledCarrierLogo} {
    height: ${({ theme }) => theme.heightIconSmall};
    width: ${({ theme }) => theme.widthIconSmall};
    img {
      height: ${({ theme }) => theme.heightIconSmall};
      width: ${({ theme }) => theme.widthIconSmall};
    }
  }

  // Icons
  & svg {
    height: ${({ theme }) => theme.heightIconSmall};
    width: ${({ theme }) => theme.widthIconSmall};
  }
`;

const List = ({
  children,
  size = SIZES.NORMAL,
  type = TYPES.PRIMARY,
  theme = defaultTokens,
}: Props) => {
  const tokens = {
    fontSizes: {
      [SIZES.SMALL]: theme.fontSizeTextSmall,
      [SIZES.NORMAL]: theme.fontSizeTextNormal,
      [SIZES.LARGE]: theme.fontSizeTextLarge,
    },
    colors: {
      [TYPES.PRIMARY]: theme.colorTextPrimary,
      [TYPES.SECONDARY]: theme.colorTextSecondary,
    },
  };

  return (
    <StyledList theme={theme} tokens={tokens} type={type} size={size}>
      {children}
    </StyledList>
  );
};

export default List;
