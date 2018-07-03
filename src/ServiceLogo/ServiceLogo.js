// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";

import { SIZE_OPTIONS, baseURL } from "./consts";
import type { Props } from "./ServiceLogo";

const StyledImage = styled.img`
  height: ${({ tokens, size }) => tokens.height[size]};
  width: auto;
  background-color: transparent; // TODO: create token backgroundServiceLogo
  overflow: hidden;
`;

const ServiceLogo = ({ name, size = SIZE_OPTIONS.MEDIUM, theme = defaultTokens }: Props) => {
  const tokens = {
    // TODO: create tokens heightServiceLogo[size]
    height: {
      [SIZE_OPTIONS.SMALL]: "12px",
      [SIZE_OPTIONS.MEDIUM]: "24px",
      [SIZE_OPTIONS.LARGE]: "48px",
    },
  };

  return (
    <StyledImage
      src={`${baseURL}/${name}.png`}
      alt={name}
      size={size}
      tokens={tokens}
      theme={theme}
    />
  );
};

export default ServiceLogo;
