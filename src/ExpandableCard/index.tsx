import React, { useState, useRef, useContext } from "react";
import styled, { keyframes, ThemeContext } from "styled-components";
import { typography, shadow, space, border, color } from "styled-system";
import { useOutsideListener } from "../hooks";
import Theme from "../theme";
import { ExpandableCardProps } from "../types";

const defaultShadow = ` 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`;

const ExpandableCard: React.FunctionComponent<ExpandableCardProps> = ({
  heading,
  children,
  flatCard
}) => {
  const theme: Theme = useContext(ThemeContext);
  const [show, setCardStatus] = useState(false);
  const cardRef = useRef(null);
  useOutsideListener(cardRef, () => {
    setCardStatus(false);
  });

  return (
    // @ts-ignore
    <StyledCard
      bg={theme.card.background}
      color={theme.card.text}
      ref={cardRef}
      pt={3}
      pl={3}
      pr={3}
      pb={1}
      onClick={() => setCardStatus(!show)}
      borderRadius={flatCard ? "none" : 4}
      boxShadow={defaultShadow}
    >
      {
        // @ts-ignore
        <StyledHeading borderBottom={show && `1px solid #ccc`}>
          {heading}
        </StyledHeading>
      }
      {show && (
        // @ts-ignore
        <StyledCardBody
          mt={3}
          pr={4}
          pb={2}
          onClick={() => setCardStatus(false)}
        >
          {children}
        </StyledCardBody>
      )}
    </StyledCard>
  );
};

const rollDown = keyframes`
	0% {
		height: 0px;
	}
	100% {
		height: auto;
	}
`;

const StyledHeading = styled.div`
  padding-bottom: 10px;
`;

const StyledCardBody = styled.div`
	${space}
	animation: ${rollDown} 1 ease-in;
`;

const StyledCard = styled.div`
	${typography}
	${shadow}
	${space}
	${border}
	${color}
	cursor: pointer;
`;

export default ExpandableCard;
