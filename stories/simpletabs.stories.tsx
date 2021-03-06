import React from "react";
import { storiesOf } from "@storybook/react";
import { SimpleTabs } from "../src";

storiesOf("Simple Tabs", module).add("Default", () => (
  <SimpleTabs
    change={selected => console.log(selected)}
    active={2}
    menuItems={[
      { id: 500, value: "Home" },
      { id: 2, value: "About" },
      { id: 3, value: "Contact Us" },
      { id: 4, value: "Gallery" }
    ]}
  />
));
