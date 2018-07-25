// @flow
import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { InformationCircle, Check, Alert as AlertTriangle, AlertCircle, Close } from "../icons";
import ButtonLink from "../ButtonLink/ButtonLink";
import { StyledTextLink } from "../TextLink/TextLink";
import TYPE_OPTIONS from "./consts";

import type { Props } from "./index";

type IconProps = {
  icon: React.Node,
  type: string,
};

const Icon = ({ icon, type }: IconProps) => {
  // Icon should be boolean and TRUE
  if (typeof icon === "boolean" && icon) {
    if (type === TYPE_OPTIONS.INFO) {
      return <InformationCircle />;
    }
    if (type === TYPE_OPTIONS.SUCCESS) {
      return <Check />;
    }
    if (type === TYPE_OPTIONS.WARNING) {
      return <AlertTriangle />;
    }
    if (type === TYPE_OPTIONS.CRITICAL) {
      return <AlertCircle />;
    }
  }
  return icon;
};

const StyledDiv = ({ className, children }: { className: string, children: React.Node }) => (
  <div className={className}>{children}</div>
);

const StyledAlert = styled(StyledDiv)`
  position: relative;
  display: flex;
  width: 100%;
  padding: ${({ theme, icon }) =>
    icon ? `${theme.paddingAlert} ${theme.paddingAlertWithIcon}` : theme.paddingAlert};
  padding-right: ${({ theme, closable }) => closable && theme.spaceXXLarge};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  background: ${({ tokens, type }) => tokens.backgroundAlert[type]};
  color: ${({ tokens, type }) => tokens.colorTextAlert[type]};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeTextNormal};
  box-sizing: border-box;
`;

StyledAlert.defaultProps = {
  theme: defaultTokens,
};

const IconContainer = styled(StyledDiv)`
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.spaceSmall};
  color: ${({ tokens, type }) => tokens.colorIconAlert[type]};
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
};

const ContentWrapper = styled(StyledDiv)`
  flex: 1; // IE wrapping fix
  display: flex;
  flex-direction: ${({ title }) => title && "column"};
  align-items: ${({ title }) => !title && "center"};
`;

const Title = styled(StyledDiv)`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme, hasChildren }) => hasChildren && theme.spaceXSmall};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  line-height: ${({ theme }) => theme.lineHeightHeading};
  min-height: ${({ theme }) => theme.heightIconMedium};
`;

Title.defaultProps = {
  theme: defaultTokens,
};

const Content = styled(StyledDiv)`
  display: block;
  margin-bottom: ${({ theme, title }) => title && theme.spaceXXSmall};
  line-height: ${({ theme }) => theme.lineHeightText};

  & a,
  & ${StyledTextLink} {
    color: ${({ tokens, type }) => tokens.colorTextAlert[type]};
    font-weight: ${({ theme }) => theme.fontWeightMedium};
    transition: color ${({ theme }) => theme.durationFast} ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.paletteInkDark}; // TODO create token
    }
  }
`;

Content.defaultProps = {
  theme: defaultTokens,
};

const CloseContainer = styled(StyledDiv)`
  position: absolute;
  top: ${({ hasChildren }) => (hasChildren ? 0 : "50%")};
  margin-top: ${({ hasChildren, theme }) => !hasChildren && `-${theme.widthIconSmall}`};
  right: 0;
  margin-right: ${({ hasChildren, theme }) => !hasChildren && theme.spaceXSmall};
`;

CloseContainer.defaultProps = {
  theme: defaultTokens,
};

const Index = (props: Props) => {
  const {
    type = TYPE_OPTIONS.INFO,
    title,
    theme = defaultTokens,
    closable,
    icon,
    onClose = () => {},
    children,
  } = props;
  const tokens = {
    colorIconAlert: {
      [TYPE_OPTIONS.INFO]: theme.colorAlertIconInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.colorAlertIconSuccess,
      [TYPE_OPTIONS.WARNING]: theme.colorAlertIconWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.colorAlertIconCritical,
    },
    backgroundAlert: {
      [TYPE_OPTIONS.INFO]: theme.backgroundAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.backgroundAlertSuccess,
      [TYPE_OPTIONS.WARNING]: theme.backgroundAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.backgroundAlertCritical,
    },
    colorTextAlert: {
      [TYPE_OPTIONS.INFO]: theme.colorTextAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.colorTextAlertSuccess,
      [TYPE_OPTIONS.WARNING]: theme.colorTextAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.colorTextAlertCritical,
    },
  };
  return (
    <StyledAlert tokens={tokens} type={type} closable={closable}>
      {icon && (
        <IconContainer tokens={tokens} type={type}>
          <Icon type={type} icon={icon} />
        </IconContainer>
      )}
      <ContentWrapper title={title}>
        {title && <Title hasChildren={children}>{title}</Title>}
        {children && (
          <Content title={title} tokens={tokens} type={type}>
            {children}
          </Content>
        )}
      </ContentWrapper>
      {closable && (
        <CloseContainer hasChildren={children}>
          <ButtonLink
            onClick={onClose}
            size="small"
            icon={<Close size="small" customColor={tokens.colorIconAlert[type]} />}
            transparent
          />
        </CloseContainer>
      )}
    </StyledAlert>
  );
};

Index.displayName = "Alert";

export default Index;
