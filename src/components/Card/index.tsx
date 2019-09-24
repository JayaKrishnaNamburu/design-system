import React, { useContext } from "react";
import styled, { ThemeContext, ThemeProvider } from "styled-components";
import { color, layout, space, border } from "styled-system";

export interface CardProps {
  heading?: string;
  theme?: string;
}

export const Card = ({ heading }: CardProps) => {
  const theme = useContext(ThemeContext);
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      // @ts-ignore
      <Heading
        bg="primaryBackground"
        color="primaryText"
        borderRadius={4}
        p={10}
      >
        {heading}
      </Heading>
    </ThemeProvider>
  );
};

const Heading = styled.div`
  ${color}
  ${layout}
  ${space}
  ${border}
`;
