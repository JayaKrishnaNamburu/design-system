import React, { useContext } from "react";
import styledTS from 'styled-components-ts'
import styled, { ThemeContext } from "styled-components";
import {
  color,
  layout,
  space,
  border,
  typography,
  shadow,
  ColorProps, LayoutProps, SpaceProps, BorderProps, TypographyProps
} from "styled-system";
import Theme from "../theme";
import { CardProps, } from "../types";

const defaultShadow = ` 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`;

const Card: React.FunctionComponent<CardProps> = ({
  heading,
  children,
  boxShadow,
  flatCard,
  align
}) => {
  const theme: Theme = useContext(ThemeContext);
  const textAlign: string = align ? align : 'center'
  return (
    <StyledCard
      bg={theme.card.background}
      color={theme.card.text}
      borderRadius={flatCard ? "none" : 4}
      p={10}
      // @ts-ignore
      textAlign={textAlign}
      fontSize={2}
      boxShadow={boxShadow ? boxShadow : defaultShadow}
    >
      {heading && (
        <StyledHeader fontWeight="bold" mt={2} mb={2} aria-label={heading}>
          {heading}
        </StyledHeader>
      )}
      <article>{children}</article>
    </StyledCard>
  );
};

export default Card;

const StyledHeader = styledTS<TypographyProps & SpaceProps>(styled.header)`
  ${typography}
  ${space}
`;

const StyledCard = styledTS<ColorProps & LayoutProps & SpaceProps & BorderProps & TypographyProps>(styled.div)`
  width: auto; ${color} ${layout} ${space} ${border} ${typography} ${shadow};
`;
