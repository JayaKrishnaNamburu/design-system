import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import styledTS from 'styled-components-ts'
import { color, layout, space, border, typography, ColorProps, LayoutProps, SpaceProps, BorderProps, TypographyProps } from "styled-system";
import Theme from "../theme";
import { ButtonProps } from "../types";

const small = {
  pt: 1,
  pb: 1,
  pl: 2,
  pr: 2
};

const regular = {
  pt: 1,
  pb: 1,
  pl: 3,
  pr: 3
};

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  size,
  aria,
  flatButton,
  disabled,
  callback
}) => {
  const theme: Theme = useContext(ThemeContext);
  const padding = size ? (size === "small" ? small : regular) : regular;

  return (
    <StyledButton
      {...padding}
      bg={disabled ? theme.colors.disabled : theme.colors.background}
      color={theme.colors.text}
      borderRadius={flatButton ? "none" : 4}
      lineHeight={2}
      fontSize={size === "small" ? "10px" : "14px"}
      onClick={() => callback()}
      aria-label={
        aria
          ? aria
          : typeof children === "string"
            ? (children as string)
            : undefined
      }
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

interface StyledButtonProps {
  disabled: boolean
}

const StyledButton = styledTS<ColorProps & LayoutProps & SpaceProps & BorderProps & TypographyProps & StyledButtonProps>(styled.button)`
  ${color}
  ${layout}
  ${space}
  ${border}
  ${typography}
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")}
`;
