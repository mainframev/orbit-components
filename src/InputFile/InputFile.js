// @flow
import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import type { Props } from "./InputFile";
import Button from "../Button/Button";
import ButtonLink from "../ButtonLink/ButtonLink";
import FormLabel from "../FormLabel/FormLabel";
import FormFeedback from "../FormFeedback/FormFeedback";
import Attachment from "../icons/Attachment";
import CloseCircle from "../icons/CloseCircle";

const Field = styled.label`
  font-family: ${({ theme }) => theme.fontfamily};
  display: block;
`;

const FakeInput = styled(({ children, className }) => <div className={className}>{children}</div>)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 6px; // TODO create token (paddingLeftInputFile)
  height: ${({ theme }) => theme.heightInputNormal};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  border: ${({ theme, error }) =>
    `${theme.borderStyleInput} ${theme.borderWidthInput} ${
      error ? theme.borderColorInputError : theme.borderColorInput
    }`};
  background-color: ${({ theme }) => theme.backgroundInput};
  transition: all ${({ theme }) => theme.durationFast} ease-in-out;

  &:hover {
    border-color: ${({ theme, error }) =>
      error ? theme.paletteRedNormalHover : theme.borderColorInputHover};
  }
`;

const Input = styled.input`
  // we need to hide the input, but not with display or visibility so we can trigger the focus
  opacity: 0;
  position: absolute;
  height: 0;

  &:focus ~ ${FakeInput} {
    box-shadow: ${({ theme, error }) =>
      error ? theme.boxShadowInputErrorFocus : theme.boxShadowInputFocus};
    border-color: ${({ theme, error }) =>
      error ? theme.borderColorInputErrorFocus : theme.borderColorInputFocus};
  }
`;

const File = styled.div`
  color: ${({ placeholderColor }) => placeholderColor};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  padding-left: ${({ theme }) => theme.spaceSmall};
`;

const InputButton = styled(Button)`
  flex-shrink: 0;
`;

const CloseButton = styled(ButtonLink)`
  flex-shrink: 0;

  & svg {
    color: ${({ theme }) => theme.paletteInkLight};
  }
`;

const InputFile = (props: Props) => {
  const { theme = defaultTokens, placeholder = "No file selected", title = "Select file" } = props;

  let placeholderColor = theme.paletteInkLight;
  if (props.error) {
    placeholderColor = theme.paletteRedNormal; // TODO create token (colorTextInputFilePlaceholderError)
  } else if (props.fileName) {
    placeholderColor = theme.colorTextInput;
  }

  return (
    <Field theme={theme}>
      <Input
        type="file"
        name={props.name}
        theme={theme}
        error={props.error}
        onChange={props.onChange}
        onFocus={props.onChange}
        onBlur={props.onBlur}
        accept={props.allowedFileTypes}
      />
      {props.label && (
        <FormLabel theme={theme} filled={!!props.fileName}>
          {props.label}
        </FormLabel>
      )}
      <FakeInput theme={theme} error={props.error}>
        <InputButton type="secondary" size="small" icon={<Attachment />} component="div">
          {title}
        </InputButton>
        <File theme={theme} fileName={props.fileName} placeholderColor={placeholderColor}>
          {props.fileName || placeholder}
        </File>
        {props.fileName && (
          <CloseButton
            type="secondary"
            transparent
            icon={<CloseCircle />}
            onClick={props.removeFile}
            theme={theme}
          />
        )}
      </FakeInput>
      {props.help && !props.error && <FormFeedback type="help">{props.help}</FormFeedback>}
      {props.error && <FormFeedback type="error">{props.error}</FormFeedback>}
    </Field>
  );
};

InputFile.defaultProps = {
  title: "Select file",
  placeholder: "No file selected",
  theme: defaultTokens,
};

export default InputFile;
