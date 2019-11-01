import React from "react";
import { TabMenuItem, Tabprops } from "../types";
import styled from "styled-components";
import { color } from "styled-system";

const Tabs: React.FunctionComponent<Tabprops> = ({ menuItems }) => {
  if (menuItems.length === 0) {
    return null;
  }

  return (
    <StyledTabWrapper pl={0}>
      {menuItems.map((menuItem: TabMenuItem) => {
        return <li>{menuItem.value}</li>;
      })}
    </StyledTabWrapper>
  );
};

export default Tabs;

const StyledTabWrapper = styled.ul`
  ${color}
  display: flex;
  list-style: none;
  justify-content: space-around;
  padding: 8px;
`;
