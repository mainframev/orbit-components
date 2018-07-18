// @flow
import * as React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";

import TYPE_OPTIONS from "./consts";
import type { Props } from "./TextLink";

const IconContainer = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  color: ${({ tokens, type }) => tokens.colorTextLink[type]};
  transition: color ${({ theme }) => theme.durationFast} ease-in-out;

  & svg {
    height: 16px;
    width: 16px;
  }
`;

export const StyledTextLink = styled(({ tokens, theme, type, ...props }) => (
  <a {...props}>{props.children}</a>
))`
      color: ${({ tokens, type }) => tokens.colorTextLink[type]};
      font-weight: ${({ theme }) => theme.fontWeightLinks}; 
      text-decoration: ${({ theme, type }) =>
        type === [TYPE_OPTIONS.SECONDARY]
          ? theme.textDecorationTextLinkSecondary
          : theme.textDecorationTextLinkPrimary};
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      transition: color ${({ theme }) => theme.durationFast} ease-in-out;
    }
    &:hover {
      text-decoration: ${({ theme, type }) =>
        type === [TYPE_OPTIONS.SECONDARY]
          ? theme.textDecorationTextLinkSecondaryHover
          : theme.textDecorationTextLinkPrimaryHover};
      color: ${({ theme, type }) =>
        type === [TYPE_OPTIONS.SECONDARY]
          ? theme.colorTextLinkSecondaryHover
          : theme.colorTextLinkPrimaryHover};
      & ${IconContainer} {
        color: ${({ theme, type }) =>
          type === [TYPE_OPTIONS.SECONDARY]
            ? theme.colorTextLinkSecondaryHover
            : theme.colorTextLinkPrimaryHover};
      }
    }
    &:focus {
      outline-width: 3px;
    }        
  `;

const TextLink = (props: Props) => {
  const {
    type = TYPE_OPTIONS.PRIMARY,
    children,
    href,
    external = false,
    theme = defaultTokens,
    rel,
    icon,
    onClick,
  } = props;
  const tokens = {
    colorTextLink: {
      [TYPE_OPTIONS.PRIMARY]: theme.colorTextLinkPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.colorTextLinkSecondary,
    },
  };

  return (
    <StyledTextLink
      type={type}
      href={href}
      target={external ? "_blank" : undefined}
      rel={rel}
      tokens={tokens}
      theme={theme}
      onClick={onClick}
    >
      {children}
      {icon && (
        <IconContainer theme={theme} type={type} tokens={tokens}>
          {icon}
        </IconContainer>
      )}
    </StyledTextLink>
  );
};

export default TextLink;
