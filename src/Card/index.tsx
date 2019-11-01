import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import {
  color,
  layout,
  space,
  border,
  typography,
  shadow
} from "styled-system";
import Theme from "../theme";
import { CardProps } from "../types";

const defaultShadow = ` 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`;

const Card: React.FunctionComponent<CardProps> = ({
  heading,
  children,
  boxShadow,
  flatCard,
  align
}) => {
  const theme: Theme = useContext(ThemeContext);
  return (
    // @ts-ignore
    <StyledCard
      bg={theme.card.background}
      color={theme.card.text}
      borderRadius={flatCard ? "none" : 4}
      p={10}
      textAlign={align ? align : "left"}
      fontSize={2}
      boxShadow={boxShadow ? boxShadow : defaultShadow}
    >
      {heading && (
        // @ts-ignore
        <StyledHeader fontWeight="bold" mt={2} mb={2} aria-label={heading}>
          {heading}
        </StyledHeader>
      )}
      <article>{children}</article>
    </StyledCard>
  );
};

export default Card;

const StyledHeader = styled.header`
  ${typography}
  ${space}
`;

const StyledCard = styled.div`
  width: auto; ${color} ${layout} ${space} ${border} ${typography} ${shadow};
`;
