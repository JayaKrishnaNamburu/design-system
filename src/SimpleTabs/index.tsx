import React, { useState, useEffect } from "react";
import { TabMenuItem, Tabprops } from "../types";
import styled, { css } from "styled-components";
import styledTS from 'styled-components-ts'
import { border, BorderProps, space, SpaceProps } from "styled-system";

const Tabs: React.FunctionComponent<Tabprops> = ({
  active,
  menuItems,
  change,
  ariaTabsHeading
}) => {
  const [activeTab, setActiveTab] = useState(active ? active : menuItems[0].id);
  if (menuItems.length === 0) {
    return null;
  }

  useEffect(() => {
    change(menuItems.filter(item => item.id === activeTab)[0]);
  }, [activeTab]);

  return (
    <StyledTabWrapper
      pl={0}
      role="tablist"
      araia-label={ariaTabsHeading ? ariaTabsHeading : undefined}
    >
      {menuItems.map((menuItem: TabMenuItem) => {
        return (
          <StyledItem
            key={`tab-${menuItem.id}`}
            role="tab"
            aria-selected={activeTab === menuItem.id}
            aria-label={menuItem.value}
            onClick={() => {
              setActiveTab(menuItem.id);
            }}
            showBorder={menuItem.id === activeTab}
          >
            {menuItem.value}
          </StyledItem>
        );
      })}
    </StyledTabWrapper>
  );
};

export default Tabs;

const StyledTabWrapper = styledTS<SpaceProps>(styled.ul)`
  ${space}
  display: flex;
  list-style: none;
  padding: 8px;
`;

interface ItemProps {
  showBorder: boolean
}

const StyledItem = styledTS<BorderProps & ItemProps>(styled.li)`
  ${border}
  cursor: pointer;
  text-align: center;
  flex-basis: 100%;
  padding-bottom: 10px;
  margin: 5px;
  position: relative;

  &:before {
    content: "";
    left: 0;
    position: absolute;
    width: 100%;
    border-bottom: ${(props: any) =>
    props.showBorder
      ? css`4px solid ${props.theme.colors.background}`
      : undefined};
    bottom: 0;
    border-radius: 6px;
  }
`;
