// @flow
import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "./consts";
import type { Props } from "./Heading";

const StyledHeading = styled(({ element: Component, className, children }) => (
  <Component className={className}>{children}</Component>
))`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ tokens, type }) => tokens.sizeHeading[type]};
  font-weight: ${({ tokens, type }) => tokens.weightHeading[type]};
  color: ${({ theme, inverted }) => (inverted ? theme.colorHeadingInverted : theme.colorHeading)};
  line-height: ${({ theme }) => theme.lineHeightHeading};
  margin: 0;
`;

const Heading = (props: Props) => {
  const {
    children,
    theme = defaultTokens,
    type = TYPE_OPTIONS.TITLE1,
    element = ELEMENT_OPTIONS.H1,
    inverted = false,
  } = props;
  const tokens = {
    weightHeading: {
      [TYPE_OPTIONS.DISPLAY]: theme.fontWeightHeadingDisplay,
      [TYPE_OPTIONS.TITLE1]: theme.fontWeightHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.fontWeightHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.fontWeightHeadingTitle3,
    },
    sizeHeading: {
      [TYPE_OPTIONS.DISPLAY]: theme.fontSizeHeadingDisplay,
      [TYPE_OPTIONS.TITLE1]: theme.fontSizeHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.fontSizeHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.fontSizeHeadingTitle3,
    },
  };
  return (
    <StyledHeading theme={theme} tokens={tokens} type={type} element={element} inverted={inverted}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
