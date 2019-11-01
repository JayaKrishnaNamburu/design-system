import React, { useContext } from "react";
import styled, { ThemeContext, keyframes, css } from "styled-components";
import { layout, color } from "styled-system";
import Theme from "../theme";
import { ProgressBarProps } from "../types";

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({
  progress,
  size,
  height,
  animate,
  label
}) => {
  const theme: Theme = useContext(ThemeContext);
  let customHeight = "16px";
  if ((height && !size) || (height && size)) {
    customHeight = height;
  }

  if (!height && size) {
    customHeight = size === "small" ? "8px" : "14px";
  }

  return (
    <StylesSlider
      bg={theme.colors.terinary}
      height={customHeight}
      role="progress"
      aria-valuetext={label}
      aria-valuemin={0}
      aria-valuenow={progress}
      aria-valuemax={100}
    >
      <StyledProgress
        bg={theme.colors.background}
        width={`${progress}%`}
        height={customHeight}
        shouldAnimate={animate}
      />
    </StylesSlider>
  );
};

export default ProgressBar;

const StylesSlider = styled.div`
  ${color}
  ${layout}
  width: inherit;
  border-radius: 8px;
  position: relative;
  margin: 5px;
`;

const StyledProgress = styled.span`
  ${color}
  ${layout}
  border-radius: 8px;
  position: absolute;
  animation: ${(props: any) =>
    props.shouldAnimate &&
    css`
      ${slide} 0.7s ease-in-out
    `};
`;

const slide = keyframes`
  0% {
    width: 0%
  }
  100% {
    width: auto;
  }
`;
